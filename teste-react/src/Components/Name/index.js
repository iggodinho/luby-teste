import React,{useContext} from 'react';
import AuthContext from '../../Storage/auth-context';
import { NameContainer, NameTitle,Icon, Email, TitleContainer } from './styles';
import Shape from '../../Assets/rectangle.svg';
export default function Name({bio}){
  const {userInfo}=useContext(AuthContext);
  const NameInfo=()=>{
    if(userInfo.name===null && userInfo.location===null && userInfo.email===null){
      return null
    }
    else{
      return(
      <>
      <Icon src={Shape}/>
      <TitleContainer>
        <NameTitle>{userInfo.name}</NameTitle>
        <Email>{userInfo.email}</Email>
        <Email>{userInfo.location}</Email>
        </TitleContainer>
      </>
    )
    }
    
  }

  const Bio=()=>{
    if(userInfo.bio!=null){
      return(
      <>
      <Icon src={Shape}/>
      <TitleContainer>
      <NameTitle>bio</NameTitle>
      <Email>{userInfo.bio}</Email>
      </TitleContainer>
      </>
    )
    }
    else{return null} 
    
  }
  
  return(
    <NameContainer>
      
        {bio?<Bio/>:<NameInfo/>}
      
    </NameContainer>
    
  )
}