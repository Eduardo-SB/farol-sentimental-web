import styled from 'styled-components';
import { ReactComponent as Logo } from '../../img/logoHome.svg';

export const ContainerHomeTitle = styled.div`
  height: 25vh;
  width: 100vw;
  padding: 15vh 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleHome = styled.span`
  font-size: 60px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-left: 20px;
  text-shadow: 2px 2px ${props => props.theme.colors.primary};
`;

export const LogoHeader = styled(Logo)`
  fill: ${props => props.theme.colors.text};
  stroke: ${props => props.theme.colors.primary};
  width: 20vw; 
  height: 25vh;
`;

export const ContainerHomeInput = styled.div`
  height: 55vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;