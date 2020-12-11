import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../img/logoHome.svg';

export const ContainerBackHome = styled.div`
  height: 10vh;
  width: 100vw;
  align-items: center;

  @media (min-width:320px) {
    display: none;
  }

  @media (min-width:600px) {
    display: flex;
  }
`;

export const TitleBack = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-left: 20px;
  text-shadow: 2px 2px ${props => props.theme.colors.primary};
`;

export const LogoHeader = styled(Logo)`
  fill: ${props => props.theme.colors.text};
  stroke: ${props => props.theme.colors.primary};
  width: 10vw; 
  height: 15vh;
  margin-left: 25vw
`;