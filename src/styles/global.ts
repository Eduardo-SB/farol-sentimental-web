import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  body{
    font: 400 14px Roboto, sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 90vh;
  }

  /* Button styles */
  button{
    cursor: pointer;
  }

  a{
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    text-shadow: 2px 2px ${props => props.theme.colors.primary};
  }

  .btn-back {
    background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%)
  }

  .btn-back {
    z-index: 1;
    margin-top: 30px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    border: none;
    display: block;
  }

  .btn-back:hover {
    background-position: right center;
    text-decoration: none;
  }
`;