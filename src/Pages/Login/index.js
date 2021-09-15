import React,{useReducer,useState,useEffect,useContext} from 'react';
import AuthContext from '../../Storage/auth-context';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { InnerContainer, LoginBg, Logo } from './styles';

const userReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.length>0};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.length>0};
  }
  return {value:'', isValid:false };
};


export default function Login(){
  const {onLogin}=useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [userState,dispatchUser] = useReducer(userReducer,{
    value:'',
    isValid: null,
  });

  const {isValid: userIsValid } = userState;

  useEffect(() => {
    setFormIsValid(true)
  }, [])
  

  const userChangeHandler = (event) => {
    dispatchUser({type:'USER_INPUT', val:event.target.value});
  };


  const submitHandler=()=>{
    if(!userState.isValid){
      setFormIsValid(false)
    }
    else{
      setFormIsValid(true)
      onLogin(userState.value)
      
    }
    
  }

  return(
    <LoginBg>
      <InnerContainer>
      <Logo/>
      <Input placeholder='Usuário' value={userState.value} onChange={userChangeHandler} validation={formIsValid}/>
      <Button onClick={submitHandler} >LOGAR</Button>
      </InnerContainer>
    </LoginBg>
  )
}