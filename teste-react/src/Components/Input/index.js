import React from 'react';
import { InputContainer } from './styles';
import Required from '../../Assets/required.svg';


export default function Input({placeholder, value, onChange, validation}){
  const required=()=>{
    if(!validation){
      return Required
    }
    else{
      return undefined
    }
  }
  
  return(
    <InputContainer maxLength='18' icon={required} placeholder={placeholder} value={value} onChange={onChange} validation={validation}>
    
    </InputContainer>
  )
}