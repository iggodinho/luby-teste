import React,{useContext} from 'react';
import Return from '../../Components/Return';
import { TopContainer, TotalFollowers,FollowerContainer,TitleContainer,NameTitle,Icon,Photo,PhotoContainer, ArrowIcon } from './styles';
import AuthContext from '../../Storage/auth-context';
import Shape from '../../Assets/rectangle.svg';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../Utils/styles';
import Header from '../../Components/Header';

export default function Followers(){
  const {userInfo,followers,getFollowInfo}=useContext(AuthContext)

  let newList=[]
  for (var i = 0; i < followers.length; i++) { newList.push(followers[i]); }
  
  
  const list=newList.map((item)=>{
    const path='/seguidores/'+item.login
    return(
      <>
      <FollowerContainer key={item.id.toString()}>
      <TitleContainer>
        <Icon src={Shape}/>
        <PhotoContainer><Photo src={item.avatar_url} /></PhotoContainer>
        <NameTitle>#{item.login}</NameTitle>
      </TitleContainer>
      <Link to={path} onClick={()=>getFollowInfo(item.login)}><ArrowIcon/></Link>
      </FollowerContainer>
      </>
    )
  })
  
  return(
    <>
    <HeaderContainer>
      <TopContainer>
        <Return destiny='/'/>
        <TotalFollowers>{userInfo.followers} Seguidores</TotalFollowers>
        <div></div>
      </TopContainer>
      <Header location='/seguidores'/>
    </HeaderContainer>
    {list}
    </>
  )
}