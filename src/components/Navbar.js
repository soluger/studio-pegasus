import React, {useContext} from 'react';
import app from '../config/firebase';
import { AuthContext } from '../config/Auth';
import {Link} from 'react-router-dom';

export default function Navbar(){
    const { currentUser } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-white navbar-expand-lg fixed-top">
            <div className="app-navbar container">
                <div className="logo">STUDIOS-<span>P</span>EGASUS</div>
                <div className="text-right">
                {currentUser ?               
                <button onClick={() => app.auth().signOut()} 
                className="btn bt-red-sm mr-2 font-weight-bold">
                    Sair</button>             
                :               
                <Link to="login" className="btn bt-red-sm mr-2 font-weight-bold">
                    Entrar</Link>
                }                
                </div>
            </div>
        </nav>
    )
}