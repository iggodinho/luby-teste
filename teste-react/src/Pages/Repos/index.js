import React,{useContext} from 'react';
import Return from '../../Components/Return';
import { TopContainer, TotalRepos,Description,NameTitle,Icon, BlockContainer,BotContainer,Star,StarContainer ,TitleContainer, StarTitle, LockContainer, Lock, Unlock } from './styles';
import AuthContext from '../../Storage/auth-context';
import Shape from '../../Assets/rectangle.svg';
import { HeaderContainer } from '../../Utils/styles';
import Header from '../../Components/Header';


export default function Repos(){
  const {userInfo,repos}=useContext(AuthContext)
  
  let newList=[]
  for (var i = 0; i < repos.length; i++) { newList.push(repos[i]); }
  console.log(newList)

  
  
  const list=newList.map((item)=>{
    
    return(
      <>
        <BlockContainer key={item.id.toString()}> 
          <Icon src={Shape}/>
          <TitleContainer>
            <NameTitle>{item.name}</NameTitle>
            <Description>{item.description}</Description>
            <BotContainer>
              <StarContainer>
                <Star/>
                <StarTitle>{item.stargazers_count}</StarTitle>
              </StarContainer>
              <LockContainer>
                <Unlock/><Lock/>
              </LockContainer>
            </BotContainer>
          </TitleContainer>
        </BlockContainer>
        
      
      </>
    )
  })
  
  return(
    <>
    <HeaderContainer>
      <TopContainer>
        <Return destiny='/'/>
        <TotalRepos>{userInfo.public_repos} Repositórios</TotalRepos>
        <div></div>
      </TopContainer>
      <Header location='/repo'/>
    </HeaderContainer>
    {list}
    </>
  )
}