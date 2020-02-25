import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Lista from '../sound/Lista';
import firebase from '../config/firebase';

function Dashboard(){
	const [title, setTitle] = useState('');
    const [audio, setAudio] = useState('');
	const [erro, setErro] = useState('');
    const storage = firebase.storage();
    function cadastrar(){
		if(audio == ''){			
			setErro('Os dados não podem ser nulos!');			
		}		
        storage.ref(`sound/${audio.name}`).put(audio).then(() => {
            firebase.firestore().collection('sounds').add({
                title: title,                
                audio: audio.name
            })
    });
		setAudio('');
		setTitle('')		
	
	
}
    return (
		<>	
		<div className="nav justify-content-end container">
			<button type="button" className="btn bt-red" data-toggle="modal" data-target="#exampleModal">
			  Add portifolio
			</button>
		</div>		
        <div className="container">
			<Lista />
		</div>
		
		<div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
			<div className="modal-content">
			  <div className="modal-header">
				<h5 className="modal-title text-white" id="exampleModalLabel">Adicionar potifólio</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>				
			  </div>			  
			  <div className="modal-body">			
				
				<input 
				onChange={(e) => setTitle(e.target.value) } 
				type="text" placeholder="Nome do portifólio" className="input100 mt-2"/>
				<input 
				onChange={(e) => setAudio(e.target.files[0]) } 
				type="file" className="input100 mt-2 pt-3"/>

			  </div>
				<h5 className="erro-msg">{erro}</h5>
				<div className="modal-footer">
				<button type="button" className="bt-defult-sm" data-dismiss="modal">Cancelar</button>
				<button onClick={cadastrar} data-dismiss="modal" type="button" className="btn bt-green-sm mr-2 font-weight-bold">
					Save portifólio
				</button>
			  </div>	  
			</div>
		  </div>
		</div>
		
		</>		
    )
}

export default Dashboard;