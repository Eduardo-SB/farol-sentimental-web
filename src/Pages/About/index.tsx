import React from 'react';
import {ContainerAbout, InfoSpan} from './style';

import {BackHome} from "../components/BackHome";

export const About: React.FC = () => {
  return (<>
    <BackHome />
    
    <ContainerAbout>
      <h2>Ideia (Problema e Solução):</h2>
      <br/>
      <InfoSpan>A análise de sentimentos é uma estratégia que proporciona um olhar 360° sobre a reputação de marcas, políticos, movimentos sociais, etc. É uma mineração contextual de um texto que identifica e extrai informações subjetivas no material de origem.</InfoSpan>
      <br/><br/>
      <InfoSpan>Exemplo: Ela ajuda as empresas a entenderem o sentimento social de sua marca, produto ou serviço.</InfoSpan>
      <br/><br/>
      <h2>Caraterísticas:</h2>
      <br/>
      <InfoSpan>O resultado esperado é uma página Web com campo para inserção dos dados da API, resultando nas porcentagens de tweets positivos, negativos ou neutro</InfoSpan>
    </ContainerAbout>

  </>);
}
