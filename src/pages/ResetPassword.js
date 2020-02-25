import React, {useState, useContext} from 'react';
import { AuthContext } from '../config/Auth';
import {Link, Redirect} from 'react-router-dom';
import { MudarSenha } from '../config/bd.js';
import Voltar from '../components/voltar';

export default function ResetPassword(){
    const [email, setEmail] = useState('');    
    const [loader, setLoader] = useState(false);
    const [erro, setErro]= useState(false);
    async function auter(){
        setLoader(true)
        try{            
            await MudarSenha(email).then(()=>{
                setLoader(false) 
                setErro("Acesse o link em seu email e mude sua senha!")   
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
        <div className="app-reset">
            <div className="mx-auto">
              <h1 className="text-white mb-4">
                  <Voltar />          
                    Mudar a senha!
              </h1>              
              <input
                  onChange={(e) => setEmail(e.target.value) }
                  type="email" placeholder="Email cadastrado" className="input100 mt-2 test-white" />             
                  <p className="erro-msg text-center">{erro}</p>
              <button onClick={auter} className="btn btn-lg btn-block bt-red" type="button">Confirmar</button>
              <div className="opcoes-login mt-5 text-center">               
                  <Link to="/" className="mx-2">Quero voltar</Link>
              </div>
            </div>
        </div>
    ): <h1>loading...</h1>
}