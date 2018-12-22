const vstruct = require('varstruct');
const v1 = require('./v1');
const base32 = require('base32.js');
const crypto = require('crypto'),
      algorithm = 'aes-256-ctr',
      password = 'dhoaison';

const Followings = vstruct([
  { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);

export const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
  ]);

export const decodeUpdateMethod = (user ) => {
  const name = user.params.value;
  return name.toString();
}

export function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
export function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

