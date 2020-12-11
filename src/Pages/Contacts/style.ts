import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
 
  @media (min-width:320px) {
    padding: 15px;
    margin-bottom: 15px;
  }

  @media (min-width:600px) {
    padding: 100px;
    margin-bottom: 15px;
  }
`;

export const ChangeCard = styled(Card)`
  margin-bottom: 25px;
`
