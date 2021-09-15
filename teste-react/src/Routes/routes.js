import React, { useContext } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Followers from '../Pages/Followers';
import Following from '../Pages/Following';
import Home from '../Pages/Home';
import Login from '../Pages/Login/index';
import Repos from '../Pages/Repos';
import UserFollow from '../Pages/UserFollow';
import AuthContext from '../Storage/auth-context';




export default function Routes(){
  const {isLoggedIn}=useContext(AuthContext)
  const OffRoutes=()=>{
    return(
    <>
    <Route path='/' component={Login}/>
    </>)
  }
  const LoggedRoutes=()=>{
    return(
      <>
      <Route exact path='/' component={Home}/>
      <Route exact path='/seguidores' component={Followers}/>
      <Route exact path='/seguindo' component={Following}/>
      <Route path='/seguindo/:user' component={UserFollow}/>
      <Route path='/seguidores/:user' component={UserFollow}/>
      <Route exact path='/repositorio' component={Repos}/>
      </>)
  }
  return(

      <BrowserRouter>
      <Switch>
      {isLoggedIn?<LoggedRoutes/>:<OffRoutes/>}
      </Switch>
     
    </BrowserRouter>
    
  )
}