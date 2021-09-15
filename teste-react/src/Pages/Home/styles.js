import styled from 'styled-components';
import {FiLogOut} from 'react-icons/fi';


export const TopContainer=styled.div`
  width: 100%;
  padding: 0 20px;
  background-color: #1F1F1F;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NameTag=styled.div`
  font-size: 24px;
  font-weight: bold;
  color:white;
  
 
`


export const LogOut=styled(FiLogOut)`
  width: 40px;
  height: 40px;
  color: #CC042A;
  
  margin-left: 5px;
`

export const LogOutTitle=styled.p`
  color: white;
  font-size: 18px;
  
  
`

export const LogOutContainer=styled.div`
  display: flex;
  align-items: center;
  
  cursor: pointer;
`

export const PhotoContainer=styled.span`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid white;
`

export const Photo=styled.img`
  border-radius: 50%;
  display: block;
  width: 150px;
  height: 150px;
`