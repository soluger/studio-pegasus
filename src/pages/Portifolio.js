import React from 'react';
import Voltar from '../components/voltar';
import Lista from '../sound/Lista';

function Portfolio() {
  return (   
    <div className="portifolio container">
      <h1 className="text-white">
          <Voltar />          
            Portfolio
      </h1>
      <br/>     
        <Lista />         
    </div>    
  );
}

export default Portfolio;