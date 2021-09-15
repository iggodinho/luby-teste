import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';

export const LoginBg=styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #292929;
`

export const InnerContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`

export const Logo = styled(AiFillGithub)`
  width: 150px;
  height: 150px;
  color: #FFCE00;
  padding-bottom: 30px;
`
