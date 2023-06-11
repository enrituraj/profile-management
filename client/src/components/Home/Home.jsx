import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import heroimg from './../../images/hero.png'
import './Home.scss'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <main className="container">
                <Cta />
            </main>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <div className="container">
                <div className="header-content">
                    <div className="text-content">
                        <h1>Mern profile manager collaborative app</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, minus. Itaque, rerum atque nesciunt ut maxime sit asperiores accusantium labore.</p>
                        <div className="right-menu">
                            <NavLink to="" className='btn btn-dark btn-icon'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1M6 11l3-3-3-3M8.5 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"></path></svg>
                                <span>Sign in</span>
                            </NavLink>
                            <NavLink to="" className='btn btn-light'>Sign up</NavLink>

                        </div>
                    </div>
                    <div className="img-content">
                        <img src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Cta = () => {
    return (
        <h1>Cta</h1>
    )
}

export default Home