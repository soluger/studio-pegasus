import React from 'react';
import {Link} from 'react-router-dom';

function Introducao(){
    return(
        <>    
        <div className="introducao">                                           
            <div className="col-lg-8 text-left text-white">
                <h1 className="font-weight-bold">PRODUÇÃO EM ÁUDIO</h1>
                <p className="lead">Gravações Comerciais, Mensagens, Audiobook, Edições de áudio em geral.</p>
                <p>
                    <Link to="portfolio" className="btn bt-red mr-2">
                        PORTFÓLIO</Link>
                    <Link to="contatos" className="btn bt-red-out mr-2">
                        CONTATOS</Link>
                </p>
            </div>            
        </div>      
        </>
    )
}

export default Introducao;