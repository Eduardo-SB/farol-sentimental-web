import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
`;

export const OptionsHeader = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding-right: 30px;
`;

export const DarkModeOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;