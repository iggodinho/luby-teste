import React, { useState, useEffect } from 'react';
import api from '../Services/api';

const AuthContext = React.createContext({
  //isLoggedIn: false,
  //onLogout: () => {},
  //onLogin: (email,password) => {},
  
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data,setData]=useState({});
  const [followers,setFollowers]=useState({});
  const [following,setFollowing]=useState({});
  const [userFollow,setUserFollow]=useState({});
  const [repo,setRepo]=useState({});
  

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);

    }
    
    
  }, []);

  useEffect(()=>{
    const user=localStorage.getItem('user')
    const otherUser=localStorage.getItem('otherUser')
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      const path='/users/'+user
      api.get(path)
        .then((response) => {
          //console.log(response.data)
          setData(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
        const pathFollower=path+'/followers'
        api.get(pathFollower)
        .then((response) => {
          //console.log(response.data)
          setFollowers(response.data)
        })
        .catch((error) => {
          console.error(error)
          
        }) 
        const pathFollowing=path+'/following'
        api.get(pathFollowing)
        .then((response) => {
          //console.log(response.data)
          setFollowing(response.data)
        })
        .catch((error) => {
          console.error(error)
          
        })
        const pathRepo=path+'/repos'
        api.get(pathRepo)
        .then((response) => {
          //console.log(response.data)
          setRepo(response.data)
        })
        .catch((error) => {
          console.error(error)
          
        })  
        if(otherUser){
          const pathOtherUser='/users/'+otherUser
          api.get(pathOtherUser)
          .then((response) => {
            //console.log(response.data)
            setUserFollow(response.data)
          })
          .catch((error) => {
            console.error(error)
            
          }) 
        }
    }
    else{
      console.log('deslogado')
    }
  },[])
  

  async function loginHandler(user){
    const path='/users/'+user
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setData(response.data)
        localStorage.setItem('isLoggedIn', '1');
        localStorage.setItem('user', user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function getFollowInfo(user){
    localStorage.setItem('otherUser',user)
    const path='/users/'+user
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setUserFollow(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function saveNewUser(user){
    const path='/users/'+user
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setData(response.data)
        localStorage.setItem('user', user);
        localStorage.removeItem('otherUser');
        setFollowers({})
        setFollowing({})
        setUserFollow({})
        setRepo({})
        
      })
      .catch((error) => {
        console.error(error)
      })
  }

  
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('otherUser');
    setIsLoggedIn(false);
    setFollowers({})
    setFollowing({})
    setData({})
    setUserFollow({})
    setRepo({})
    //window.location.reload()
  };

  async function getFollowers(user){
    const path='/users/'+user+'/followers'
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setFollowers(response.data)
      })
      .catch((error) => {
        console.error(error)
      })


  }

  async function getFollowing(user){
    const path='/users/'+user+'/following'
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setFollowing(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function getRepos(user){
    const path='/users/'+user+'/repos'
    api.get(path)
      .then((response) => {
        //console.log(response.data)
        setRepo(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  

  return <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler,
      userInfo: data,
      getFollowers: getFollowers,
      followers:followers,
      following:following,
      getFollowing: getFollowing,
      getFollowInfo:getFollowInfo,
      followInfo:userFollow,
      onUserChange:saveNewUser,
      getRepos:getRepos,
      repos:repo
    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;