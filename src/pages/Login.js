import React, {useState, useContext} from 'react';
import { AuthContext } from '../config/Auth';
import {Link, Redirect} from 'react-router-dom';
import { login } from '../config/bd.js';
import Voltar from '../components/voltar';
import Loading from '../components/Loading';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [erro, setErro]= useState(false);
    async function auter(){
        setLoader(true)
        try{            
            await login(email,password).then(()=>{
                setLoader(false)               
            })          
        }catch(error){
            setLoader(false)
            setErro(error.message)            
        }
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
    return <Redirect to="/dashboard" />;
    }   
    return loader === false ? (
        <div className="d-flex align-items-center container">
            <div className="mx-auto">
              <h1 className="text-white mb-4">
                  <Voltar />          
                    Login
              </h1>              
              <input
                  onChange={(e) => setEmail(e.target.value) }
                  type="email" placeholder="email" className="input100 mt-2 test-white" />
              <input
                  onChange={(e) => setPassword(e.target.value) } 
                  type="password" placeholder="password" className="input100 mt-2 test-white" />
                  <p className="erro-msg text-center">{erro}</p>
              <button onClick={auter} className="btn btn-lg btn-block bt-red" type="button">Entrar</button>
              <div className="opcoes-login mt-5 text-center">
                  <Link to="/reset-password" className="mx-2">Esqueceu a senha?</Link>
                  <span className="text-white">/</span>
                  <Link to="/" className="mx-2">Quero voltar</Link>
              </div>
            </div>
        </div>
    ): <Loading />
}