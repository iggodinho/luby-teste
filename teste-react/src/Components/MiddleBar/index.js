import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Storage/auth-context';
import { BgContainer,NumberContainer,Number,Title, InnerContainer } from './styles';

export default function MiddleBar({user}){
  const url=window.location.pathname
  
  const {getFollowers,getFollowing,getRepos}=useContext(AuthContext);
  const infos=[{title:'Seguidores',value:user.followers,path:'/seguidores',action:()=>getFollowers(user.login),key:'1'},{title:'Seguindo',value:user.following,path:'/seguindo',action:()=>getFollowing(user.login),key:'2'},{title:'Repos',value:user.public_repos,path:'/repositorio',action:(()=>getRepos(user.login)),key:'3'}]

  const list=infos.map((item)=>{
    if(url==='/'){
      return(
      <Link to={item.path} >
      <NumberContainer key={item.key} onClick={item.action}>
        <Number>{item.value}</Number>
        <Title>{item.title}</Title>
      </NumberContainer>
      </Link>
    )
    }
    else{
      return(
        
        <NumberContainer key={item.key}>
          <Number>{item.value}</Number>
          <Title>{item.title}</Title>
        </NumberContainer>
      
      )
    }
    
  })
  return(
    <>
      <BgContainer>
        <InnerContainer>
        {list}</InnerContainer>
      </BgContainer>

    </>
    
  )
}