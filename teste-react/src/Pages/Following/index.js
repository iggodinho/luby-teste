import React,{useContext} from 'react';
import Return from '../../Components/Return';
import { TopContainer, TotalFollowing,FollowingContainer,TitleContainer,NameTitle,Icon,Photo,PhotoContainer, ArrowIcon } from './styles.js';
import AuthContext from '../../Storage/auth-context';
import Shape from '../../Assets/rectangle.svg';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../../Utils/styles';
import Header from '../../Components/Header';

export default function Following(){
  const {userInfo,following,getFollowInfo}=useContext(AuthContext)
  
  let newList=[]
  for (var i = 0; i < following.length; i++) { newList.push(following[i]); }
  
  
  const list=newList.map((item,index)=>{
    const path='/seguindo/'+item.login
    return(
      <>
      <FollowingContainer key={item.id.toString()}>
      <TitleContainer>
        <Icon src={Shape}/>
        <PhotoContainer><Photo src={item.avatar_url} /></PhotoContainer>
        <NameTitle>#{item.login}</NameTitle>
      </TitleContainer>
      <Link to={path} onClick={()=>getFollowInfo(item.login)}><ArrowIcon/></Link>
      </FollowingContainer>
      </>
    )
  })
  
  return(
    <>
    <HeaderContainer>
      <TopContainer>
        <Return destiny='/'/>
        <TotalFollowing>Seguindo {userInfo.following} </TotalFollowing>
        <div></div>
      </TopContainer>
      <Header location='/seguindo'/>
    </HeaderContainer>
    {list}
    </>
  )
}