import React,{useState} from 'react'
import avatar from './../../images/avatar.jpg'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import {useLogout}  from './../../hooks/useLogout'
import useAuthContext from './../../hooks/useAuthContext'

const Navbar = () => {
const {user} = useAuthContext()

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-flex">
            <div className="logo">
              <div className='logo-item'>
                <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M21.657 8H2l5.657 5.6v7.733L21.657 8ZM10.343 24H30l-5.657-5.6v-7.733L10.343 24Z" fill="currentColor" fillRule="evenodd"></path></svg>
              </div>
              <h1>Mern_Profile</h1>
            </div>
            <div className="primary-menu">
              <ul className="menu">
                <li>
                  <NavLink to="/" className='menu-item'>Home</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {user && (<DropdownMenu />)}
          {!user && (<LoginMenu />)}
        </nav>
      </div>
    </>
  )
}

const DropdownMenu = () => {
const {user} = useAuthContext()
const {logout} = useLogout()
const handleclick = () =>{
  logout()
}
  const [open, setopen] = useState('');
  //it will help to show and hide dropdown menu bar.
  function Toggle_dropdown(){
    (open === "active")? setopen('') : setopen('active');
  }
  
  return (
    <>
    <div className="right-menu">
      <div className="dropdown-menu" onClick={() => Toggle_dropdown()}>
        <div className="user-pic">
          <img src={avatar} alt="" />
        </div>
        <div className="user-data">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className={"drodown-box " + open}>
        <ul className="dropdown-item">
          <li>
            <NavLink to="">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="">Login Activity</NavLink>
          </li>
          <li>
            <NavLink to="">profile</NavLink>
          </li>
          <li>
            <NavLink to="">profile</NavLink>
          </li>
          <li>
            <NavLink onClick={handleclick} className='btn btn-dark btn-icon'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

const LoginMenu = () => {
  return (
    <>
      <div className="right-menu">
        <NavLink to="/signup" className='btn btn-light'>Sign up</NavLink>
        <NavLink to="/login" className='btn btn-dark btn-icon'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
          <span>Sign in</span>
        </NavLink>
      </div>
    </>
  )
}

export default Navbar