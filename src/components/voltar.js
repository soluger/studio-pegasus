import React from "react";
import {Link} from 'react-router-dom';

const Voltar = () => {    
  return (
      <>
        <Link to="/" className="voltar btn bt-red-sm mr-2 font-weight-bold">
        <i className="fas fa-arrow-left fa-2x text-white"></i></Link>  
      </>
    );
};

export default Voltar;