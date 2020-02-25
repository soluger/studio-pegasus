import React from 'react';
import Voltar from '../components/voltar';

function Contatos() {
  return (   
    <div className="contatos container">
        <h1 className="text-white">
            <Voltar />          
            Contatos
        </h1>
        <br/>
        <div className="row">
        <div className="col-md-6 col-sm-12">
				<div className="card mt-4">
					<div className="card-block">
						<div className="row align-items-center justify-content-center">
							<div className="col-auto avatar">
                            <i className="Ic2 fas fa-at text-white"></i>
							</div>
							<div className="col">
                                <h5>email@mail.com</h5>								
							</div>                            
						</div>                                    
					</div>
				</div>
			</div>
            <div className="col-md-6 col-sm-12">
				<div className="card mt-4">
					<div className="card-block">
						<div className="row align-items-center justify-content-center">
							<div className="col-auto avatar">
                            <i className="Ic2 fab fa-whatsapp text-white"></i>
							</div>
							<div className="col">
                                <h5>(61)99999-9999</h5>								
							</div>                            
						</div>                                    
					</div>
				</div>
			</div>		
         
        </div>   
    </div>    
  );
}

export default Contatos;