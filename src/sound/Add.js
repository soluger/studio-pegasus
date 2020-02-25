import React, { useState } from 'react';
import firebase from '../config/firebase';

function Add(){
    const [title, setTitle] = useState('');
    const [audio, setAudio] = useState('');
    const storage = firebase.storage();
    function cadastrar(){        
        storage.ref(`sound/${audio.name}`).put(audio).then(() => {
            firebase.firestore().collection('sounds').add({
                title: title,                
                audio: audio.name
            })
            setTitle(null)
            setAudio(null)
    });
   
}
    return(
        <div className="container">
            <h1 className="text-white">Add</h1>
            <input onChange={(e) => setTitle(e.target.value) } type="text" className="input100 mt-2 test-white" />
            <input onChange={(e) => setAudio(e.target.files[0]) } type="file" className="input100 mt-2 test-white pt-3"/>
            <button onClick={cadastrar}data-dismiss="modal" className="btn bt-red mt-2 w-100">Add</button>
			<button className="btn bt-red-out mt-2 w-100">Add</button>
        </div>
    )
}

export default Add;