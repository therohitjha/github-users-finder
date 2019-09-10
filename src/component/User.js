import React, {useEffect,Fragment } from 'react'
import Repos from './Repos'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'

const User=({user,isloading,repos,getrepos,getUser,match})=> {

    useEffect(()=>{
        getUser(match.params.login)
       getrepos(match.params.login)
       //eslint-disable-next-line
    },[])

        const {name,bio,location,followers,following,public_repos,avatar_url,html_url,hireable}=user
        if(isloading)
        return <Spinner/>
        return (
            <Fragment>
           
<Link to='/' className='btn btn-light'>Back</Link>
        Hireable:{' '}
        {hireable?(<i className='fas fa-check text-success'/>):(<i className='fas fa-times-circle text-danger'/>)}
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} alt={name} className="round-img" style={{width:'150px'}}/>
                <h3>{name}</h3>
                <h4>{location}</h4>
            </div>
            <div>
                {bio && <Fragment>
                    <h2>Bio</h2>
                    <p>{bio}</p>
                    <a href={html_url} className="btn btn-dark my-1">My Github Page</a>
                </Fragment>}
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Follower: {followers}</div>
            <div className="badge badge-light">Following: {following}</div>
            <div className="badge badge-success">Repos: {public_repos}</div>
        </div>
            <Repos repos={repos}/>
            </Fragment>
        )
    }

export default User
