import React from 'react';

import {TitleResults, ContainerTitle, HashTag , ContainerButton, ContainerResults, InfoResults} from './style';
import {BackHome} from '../components/BackHome';

import {useParams, Link} from 'react-router-dom';

import imgHappy from '../../img/happy.svg';
import imgNeutral from '../../img/neutral.svg';
import imgSad from '../../img/sad.svg';

export const Results: React.FC = () => {
  const { hashtag }  = useParams();
  const positive = '65 %';
  const neutral = '15 %';
  const negative = '20 %';


  return (<div>
    <BackHome />
    <ContainerTitle>

      <TitleResults>Resultado para: </TitleResults> 
      <HashTag> #{hashtag}</HashTag>

    </ContainerTitle>

    <ContainerResults>
      <img src={imgHappy} alt="happy" style={{ width: '200px', height: '100px'}}/>
      <img src={imgNeutral} alt="neutral" style={{ width: '200px', height: '100px'}}/>
      <img src={imgSad} alt="sad" style={{ width: '200px', height: '100px'}}/>
    </ContainerResults>

      <InfoResults>
        <div>Positivo</div>
        <div>Neutro</div>
        <div>Negativo</div>
      </InfoResults>
    
      <InfoResults>
        <div>{positive}</div>
        <div>{neutral}</div>
        <div>{negative}</div>
      </InfoResults>

    <ContainerButton>
      <button className="btn-back">
        <Link className="no-link-button" to="/inicio">Buscar Novamente</Link>
      </button>
    </ContainerButton>
  </div>);
}