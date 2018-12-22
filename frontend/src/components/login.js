import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loggin } from '../action/authentication';
import { encrypt } from '../action/lib/tx/ulities';
const { Keypair } = require('stellar-base');

    
class Login extends Component {
    state = { 
        privateKey: ''
     }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        let { privateKey } = this.state;
        let KeyPair;
        try{
         KeyPair = Keypair.fromSecret(privateKey);
        if(!KeyPair){
            throw ('Invalid private key');
        } else {
            var address = KeyPair.publicKey();
            alert(address);
            let ecryPrivateKey = encrypt(privateKey)
            sessionStorage.setItem('privateKey', ecryPrivateKey); 
            this.props.onLogin(privateKey, address);
            this.props.history.push('/home');
          

        }
    } catch(err){
        alert(err)
        console.log('Invalid Private Key');
    }

    }
    render() { 
        return ( 
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Private Key"
                    className="form-control"
                    name="privateKey"
                    onChange={ this.handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
                </div>
            </form>
        </div>
         );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (privateKey, publicKey) => {
            dispatch(Loggin(privateKey, publicKey));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);