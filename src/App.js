import React, { useState , useEffect,Fragment} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './component/index.css'
import Navbar from './component/Navbar'
import Users from './component/Users'
import User from './component/User'
import Search from './component/Search'
import Footer from './component/Footer'
import Alert from './component/Alert'
import About from './component/About'
const App=()=>{
   
const [users,setUsers]=useState([])
const [user,setUser]=useState({})
const [isLoading,setloading]=useState(false)
const [alert,setAlert]=useState(null)
const [repos,setrepos]=useState([])

useEffect(()=>{
    setloading(true)
    fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>res.json()).then(res2=>{
    setUsers(res2) 
    setloading(false) 
    })
    //eslint-disable-next-line
},[])


  const  searchUsers=(text)=>{
        fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>res.json()).then(res2=>{
            setUsers(res2.items) 
            setloading(false) 
        })
    }


  const getUser=(username)=>{
    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>res.json()).then(res2=>{
        setUser(res2) 
        setloading(false) 
    })
   }
   
  const getrepos=(username)=>{
    fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res=>res.json()).then(res2=>{
        setrepos(res2) 
        setloading(false) 
    })
   }

  const  showAlert=(msg,type)=>{
setAlert({msg,type})
setTimeout(()=>{
    setAlert(null) 
},2000)
    }
        return (
            <div>
            <Router>
                <Navbar/>
                <div className='container'>
                <Alert alert={alert}/>
                <Switch>
                <Route exact path='/github-users-finder/' render={props=>(   
                     <Fragment>
                <Search searchUsers={searchUsers} setAlert={showAlert}/>
                <Users isLoading={isLoading} users={users}/>
                </Fragment>
                )}
                />
                <Route exact path='/github-users-finder/about' component={About}/>
                <Route path='/github-users-finder/user/:login' render={props=>(
<User {...props} getUser={getUser} user={user} isLoading={isLoading} getrepos={getrepos} repos={repos}/>
                )}
                /> 
                </Switch>
                </div>
                <Footer/>
                </Router>
            </div>
        )
    }

export default App
