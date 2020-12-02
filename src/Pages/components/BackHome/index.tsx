import React from 'react';
import {Link} from 'react-router-dom';
import {ContainerBackHome, TitleBack, Title, LogoHeader} from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const BackHome: React.FC = () => {
  return (
    <ContainerBackHome>
      <Link to="/inicio"> <ArrowBackIcon /></Link>
      <TitleBack>
        <Link to="/inicio"> Voltar</Link>
       </TitleBack> 
      <LogoHeader />
      <Title>Farol Sentimental</Title>
    </ContainerBackHome>
  );
}