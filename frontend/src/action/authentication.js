import {LOGIN, LOGOUT, GET_USER, GET_FOLLOWING_POST } from './type';
import Axios from 'axios';
// 
const vstruct = require('varstruct');
const v1 = require('./lib/tx/v1');
const Transaction = vstruct([
  { name: 'version', type: vstruct.UInt8 },
]);

export const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
  ]);

  const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
  ]);
  

var { decodeUpdateMethod } = require('./lib/tx/ulities');
const base32 = require('base32.js');


const url = 'https://komodo.forest.network/tx_search?';

export const Loggin = (privateKey, publicKey) => {
    return (dispatch) => {
        var array = []
        Axios.get(`${url}query=%22account=%27${publicKey}%27%22`)
        .then(data => {
            var transactions = data.data;
             array = transactions.result.txs.map(transaction => {
              var data = transaction.tx;
              var buff = new Buffer.from(data, "base64");
              return decode(buff);
            });
           var postMethod = [];
           var paymentMethod = [];
           var updateMethod = [];
           var createAccountMethod = [];
           let followMethod = [];           
           var user = {
               username: '',
               post: [],
               following: [],
               balance: 0
           }
           //filter method.
           array.map(tx => {
               if(tx.operation === 'payment'){
                   paymentMethod.push(tx);
               } else if(tx.operation ==='update_account' && tx.params.key ==='name') {
                   updateMethod.push(tx)
               } else if(tx.operation === 'post') {
                   postMethod.push(tx);
               } else if (tx.operation ==='update_account' && tx.params.key === 'followings'){
                   followMethod.push(tx);
               } 
               else {
                   createAccountMethod.push(tx);
               }
           });

           //get username.
           var lastestUpdateTransaction = updateMethod[updateMethod.length - 1];
           var updateTransaction = decodeUpdateMethod(lastestUpdateTransaction);
           user.username = updateTransaction;

           //get posts.
           postMethod.map(tx => {
               let { content } = tx.params;
               try {
                   let result= PlainTextContent.decode(content);
                   user.post.push(result);
               }
               catch(err){
                   console.log(err)
               }
               
           });
           //get following people.
           followMethod.map(tx => {
               let followingAddress = Followings.decode(tx.params.value);
               var addressValue = followingAddress.addresses;
              for(let i =0; i<addressValue.length; i++) {
                addressValue[i] = base32.encode(addressValue[i]);
              }
              user.following.push(addressValue);
           })
           //get current balance.
           paymentMethod.map(tx => {
               if(tx.account !== publicKey) {
                   user.balance += tx.params.amount;
               } else {
                   user.balance -= tx.params.amount;
               }
           })
           //get current sequence.
           dispatch(GetUser(user))
        })
    }
}

export const Login = ( publicKey) =>{
    return {
        type: LOGIN,
        payload: {
            publicKey
        }
    }
}

export const Logout = (history) => {
    return {
        type: LOGOUT
    }
}

export const GetUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}


//decode function.
function decode(data) {
    const versionTx = Transaction.decode(data);
    switch (versionTx.version) {
      case 1:
    //   console.log(v1.decode(data));
        return v1.decode(data);
      default:
        throw Error('Unsupport version');
    }
  }
