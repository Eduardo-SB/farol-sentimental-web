import React from 'react';

import {Link} from 'react-router-dom'

import './styles.css';
import NotFoundImage from '../../img/NotFound.png';

export const NotFound: React.FC = () => {
  return (
    <div className="ContainerNotFound">
      <h2>404 PAGE NOT FOUND</h2>
      
        <button className="btn-back">
          <Link className="no-link-button" to="/inicio">Voltar </Link>
        </button>

      <img className="postion-image-not-found" src={NotFoundImage} alt="ERROR 404 PAGE NOTE FOUND"/>
    </div>
  );
}