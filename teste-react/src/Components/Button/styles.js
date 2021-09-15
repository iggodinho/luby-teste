import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const ButtonContainer = styled.button `
    margin-top: 3%;
    width: 300px;
    padding:10px;
    color: black;
    background-color:#FFCE00;
    font-weight: bold;
    font-size: 20px;
    border:0px;
    border-radius: 10px;  
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    
`

export const Icon=styled(AiOutlineArrowRight)`
  width: 20px;
  margin-left: 5px;
 
`
