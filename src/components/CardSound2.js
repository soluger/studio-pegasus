import React, {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../config/Auth';
import firebase from '../config/firebase';
import ReactAudioPlayer from 'react-audio-player';

export const CardSound2 = ({ sound }) => {
    const { currentUser } = useContext(AuthContext);
  const [title, setTitle] = useState(sound.title);
  const [som, setSom] = useState();

    useEffect(() => {
         firebase.storage().ref(`sound/${sound.audio}`).getDownloadURL().then(url => {
            setSom(url)
        });
    })

  
  const onDelete = () => {
    const db = firebase.firestore()
    firebase.storage().ref(`sound/${sound.audio}`).delete().then(()=>{
        db.collection('sounds').doc(sound.id).delete()
    })    
  }

  return (
            <>		
			<div className="col-md-6 col-sm-12">
				<div className="card mt-2">
					<div className="card-block">
						<div className="row align-items-center justify-content-center">
							<div className="col-auto avatar">
                            <i className="Ic fas fa-microphone-alt text-white"></i>
							</div>
							<div className="col">
                                <h5>{title}</h5>								
							</div>                            
						</div>
                        <hr/>
                        <div className="row nav justify-content-center">
                            <ReactAudioPlayer className="control" src={som} controls />
                        </div>
                        {currentUser &&
                        <>
                        <hr/>
                        <div className="row nav justify-content-end">
                            <button onClick={onDelete} className="btn btn-danger">Deletar</button>
                        </div>
                        </> 
                        }                   
					</div>
				</div>
			</div>			     
          </>
  );
};
