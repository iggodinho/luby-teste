import styled from 'styled-components';
import {AiOutlineStar,AiOutlineLock,AiOutlineUnlock} from 'react-icons/ai';


export const TopContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#1F1F1F;
  height: 20vh;
  width: 100%;
`

export const TotalRepos=styled.p`
  font-size: 24px;
  color: white;
  padding: 10px;
  
`

export const BlockContainer=styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
  margin-bottom: 20px;
`

export const Icon=styled.img`
  width: 10px;
  margin-right: 10px;
  
`

export const Description=styled.p`
  font-size: 20px;
  color:white;
`

export const TitleContainer=styled.div`
  display:flex;
  align-items:flex-start;
  flex-direction: column;

`

export const NameTitle=styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom:10px;
  min-width: 180px;
`

export const BotContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`

export const StarContainer=styled.div`
  display: flex;
  align-items: center;

`

export const StarTitle=styled.p`
  color:white;
  font-size:24px;
`

export const Star = styled(AiOutlineStar)`
    margin-right:5px;
    width: 30px;
    height: 30px;
    color: #A18611;
    
   
`

export const LockContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`

export const Lock = styled(AiOutlineLock)`
    width: 50px;
    height: 50px;
    color: #CC042A;
    
`

export const Unlock = styled(AiOutlineUnlock)`
    width: 50px;
    height: 50px;
    color: #60B820;
    
`