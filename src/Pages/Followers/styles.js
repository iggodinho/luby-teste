import styled from 'styled-components';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const TopContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#1F1F1F;
  width: 100%;
  height: 20vh;
  
`

export const TotalFollowers=styled.p`
  font-size: 24px;
  color: white;
  padding: 10px;
`
export const FollowerContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin-bottom: 20px;
`

export const Icon=styled.img`
  width: 10px;
  margin-right: 10px;
`

export const TitleContainer=styled.div`
  display:flex;
  align-items:center;
  
`

export const NameTitle=styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-left: 30px;
  
`

export const ArrowIcon = styled(AiOutlineArrowRight)`
    
    width: 50px;
    height: 50px;
    padding: 10px;
    color: white;
    cursor:pointer;  
   
`

export const PhotoContainer=styled.span`
  margin: 20px 0;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid white;
  margin-right:10px;
  
`

export const Photo=styled.img`
  border-radius: 50%;
  display: block;
  width: 150px;
  height: 150px;
`