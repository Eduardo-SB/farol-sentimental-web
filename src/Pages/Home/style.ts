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
  @media (min-width:320px) {
    font-size: 50px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    text-shadow: 2px 2px ${props => props.theme.colors.primary};
  }

  @media (min-width:600px) {
    font-size: 60px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    margin-left: 20px;
    text-shadow: 2px 2px ${props => props.theme.colors.primary};
  }
`;

export const LogoHeader = styled(Logo)`
  @media (min-width:320px) {
    display: none;
  }

  @media (min-width:600px) {
    display: block;
    fill: ${props => props.theme.colors.text};
    stroke: ${props => props.theme.colors.primary};
    width: 20vw; 
    height: 25vh;
  }
`;

export const ContainerHomeInput = styled.div`
  height: 55vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;