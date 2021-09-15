import React from 'react';
import {Link} from 'react-router-dom';
import { ArrowDiv,ArrowIcon } from './styles';

export default function Return({destiny}){
  return(
    <>
    <ArrowDiv><Link to={destiny}>
      <ArrowIcon/></Link>
    </ArrowDiv>
    </>
  )
}