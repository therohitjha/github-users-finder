import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UsersItem =({user:{avatar_url,login,id}})=> {

       
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt={id} className='round-img' style={{width:'60px'}}/>
            <h1>{login}</h1>
            <Link to={`/github-users-finder/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
            </div>
        )
    }

    UsersItem.propTypes={
        user:PropTypes.object.isRequired,
    }

   

export default UsersItem
