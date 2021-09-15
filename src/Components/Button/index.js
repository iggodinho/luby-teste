import React from 'react';
import { ButtonContainer, Icon } from './styles';






export default function Button({onClick}){
  return(
    <ButtonContainer onClick={onClick}>
      
        ENTRAR
        <Icon/>
      
    </ButtonContainer>
  )
}