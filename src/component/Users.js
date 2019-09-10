import React from 'react'
import UsersItem from './UsersItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const Users=({users,isLoading})=> {

  if(isLoading){
  return  <Spinner/>
  }
  else{
    return (
        <div style={myStyle}>
          {users.map(user=>(
          <UsersItem key={user.id} user={user}/>
          ))}
        </div>
    )
  }
       
    }


Users.propTypes={
    users:PropTypes.array.isRequired,
    isLoading:PropTypes.bool.isRequired,
}

const myStyle={
    // display:'grid',
    // gridTemplateColumns:'repeat(3 ,1fr)',
    // gridGap:'1rem',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around'
    
}

export default Users
