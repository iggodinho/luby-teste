import styled from "styled-components";

export const InputContainer = styled.input`
    width: 280px;
    background-color: white;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
    font-size: 16px;
    border: 0px;
    color: black;
    outline: none;
    background-size: 30%;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y:50%;
    &&:focus{
      border-color:#FFCE00;
      
    }   
`