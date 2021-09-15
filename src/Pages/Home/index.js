import React, { useContext } from 'react';
import Header from '../../Components/Header';
import MiddleBar from '../../Components/MiddleBar';
import Name from '../../Components/Name';
import AuthContext from '../../Storage/auth-context';
import {  TopContainerBg, HeaderContainer } from '../../Utils/styles';
import { NameTag,TopContainer, LogOutContainer,LogOut, Photo, PhotoContainer, LogOutTitle } from './styles';

export default function Home(){
  const {userInfo,onLogout}=useContext(AuthContext)
  

  return(
    <>
    <HeaderContainer>
      <TopContainerBg>
          <TopContainer>
            <NameTag>#{userInfo.login}</NameTag>
            <PhotoContainer><Photo src={userInfo.avatar_url} /></PhotoContainer>
            <LogOutContainer onClick={onLogout}>
              <LogOutTitle>Sair</LogOutTitle>
              <LogOut/>
            </LogOutContainer>
          </TopContainer>
      </TopContainerBg>
      <Header location='/'/>
    </HeaderContainer>
    <Name/>
    <MiddleBar user={userInfo}/>
    <Name bio={true}/>
    
    </>
  )
}