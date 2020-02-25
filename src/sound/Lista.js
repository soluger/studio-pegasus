import React, {useState, useEffect, useContext} from 'react';
import firebase from '../config/firebase';
import { AuthContext } from '../config/Auth';

import {CardSound} from '../components/CardSound';

export default function Lista(){
    const [sounds, setSounds] = useState([]);
    const [loader, setLoader] = useState(true);
	const { currentUser } = useContext(AuthContext);
    
    useEffect(()=> {        
        const cleanUp = firebase.firestore().collection('sounds')
        .onSnapshot((snapshot) => {
            
            var list = [];                 
            snapshot.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() });
            });                          
            setSounds(list);
            setLoader(false)                      
        })  
        return ()=>{ cleanUp(); }     
    }, []);
    
    
    return loader === false ?(        
		<div className="row">		
        {sounds.map(sound => <CardSound key={sound.id} id={sound.id}  sound={sound}/>)}
		</div>		    
    ): <h1 className="text-white">Carregando...</h1>
}