import React, { useContext } from 'react';
import MiddleBar from '../../Components/MiddleBar';
import Name from '../../Components/Name';
import AuthContext from '../../Storage/auth-context';
import { HeaderContainer, TopContainerBg } from '../../Utils/styles';
import { NameTag,TopContainer, LogOutContainer, Photo, PhotoContainer, LogOutTitle } from '../../Pages/Home/styles';
import Return from '../../Components/Return';
import { LogIn, NameContainer } from './styles';
import { useHistory } from 'react-router';
import Header from '../../Components/Header';

export default function UserFollow(){
  const {followInfo,onUserChange}=useContext(AuthContext)
  const url=window.location.pathname
  const urlIndex=url.slice(1).search('/')
  const follower=url.slice(0,urlIndex+1)

  const path=follower
  const history=useHistory()
  const saveUser=()=>{
    history.push('/')
    onUserChange(followInfo.login)
    //window.location.reload()
  }
  return(
    <>
    <HeaderContainer>
      <TopContainerBg>
          <TopContainer>
            <Return destiny={path}/>
            <NameContainer>
              <PhotoContainer><Photo src={followInfo.avatar_url} /></PhotoContainer>
              <NameTag>#{followInfo.login}</NameTag>
            </NameContainer>
            <LogOutContainer onClick={saveUser}>
              <LogOutTitle>Salvar</LogOutTitle>
              <LogIn/>
            </LogOutContainer>
          </TopContainer>
      </TopContainerBg>
      <Header location={path}/>
    </HeaderContainer>
    <Name/>
    <MiddleBar user={followInfo}/>
    <Name bio={true}/>
    </>
  )
}