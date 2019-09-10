import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar =({icon,title})=> {

        return (
            <div className='navbar' style={{color:'white',background:'#39c0cc'}}>
            <h1><a href='https://github.com'><i className={icon}/></a><Link to='/github-users-finder/'>{title}</Link></h1>
            <ul>
                <li>
                <Link to='/github-users-finder/user/therohitjha'>therohitjha</Link>
                </li>
                <li>
                <Link to='/github-users-finder/about'>About</Link>

                </li>
            </ul>
            </div>
        )
    }
    Navbar.defaultProps={
        title:'Github Finder',
        icon:'fab fa-github'
    }
    Navbar.propTypes={
        title: PropTypes.string.isRequired,
    }


export default Navbar
