import { FiUsers,FiGithub } from 'react-icons/fi';
import {BiHomeAlt} from 'react-icons/bi';
import styled from 'styled-components';

export const HeaderContainer=styled.div`
  background-color: white;
  width: 100%;
  display:flex;
  align-items: center;
  flex-direction: column;
`


export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:960px;
`

export const NavOption =styled.li`
    display:flex;
    flex-direction: column;
    align-items:center;
    color: #1F1F1F;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 20px;
    opacity:${props=>
    {return props.active===true?'100%':'50%'}};
    cursor:pointer;
    &:hover{
      opacity:100%;
    }
`


export const FollowerIcon = styled(FiUsers)`
   width: 50px;
    height: 50px;
`

export const HomeIcon = styled(BiHomeAlt)`
    width: 50px;
    height: 50px; 
`

export const RepoIcon = styled(FiGithub)`
    width: 50px;
    height: 50px;
`