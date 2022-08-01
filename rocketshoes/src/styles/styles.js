import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/images/1581357816251-attachment.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #191920 url(${backgroundImage}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sansserif
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  h1{
    color: #FFF;
  }

  button{
    cursor: pointer;
  }
`;
