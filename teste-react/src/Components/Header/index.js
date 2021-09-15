import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Storage/auth-context';
import { NavOption,NavList, HomeIcon, RepoIcon, FollowerIcon, HeaderContainer } from './styles';

export default function Header({location}){
  const {getFollowing,getFollowers,getRepos,userInfo}=useContext(AuthContext)
  const home=location==='/'
  const follower=location==='/seguidores'
  const following=location==='/seguindo'
  const repo=location==='/repo'
  return(
    <HeaderContainer>
    
    <NavList>
          <Link to='/' ><NavOption active={home}>
            <HomeIcon/>Home
          </NavOption>
          </Link>
          <Link to='/repositorio' onClick={()=>getRepos(userInfo.login)}>
            <NavOption active={repo}><RepoIcon/>Repos
          </NavOption></Link>
          <Link to='/seguidores' onClick={()=>getFollowers(userInfo.login)}>
            <NavOption active={follower} ><FollowerIcon/>Seguidores
          </NavOption></Link>
          <Link to='/seguindo' onClick={()=>getFollowing(userInfo.login)}>
            <NavOption active={following} ><FollowerIcon/>Seguindo
          </NavOption></Link>
          
    </NavList>
    </HeaderContainer>
  )
}
