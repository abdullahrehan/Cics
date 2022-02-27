import React from 'react'
import { MdPermContactCalendar } from 'react-icons/md';
import { MdSupervisorAccount } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import { Link } from 'react-router-dom'
import caligraphy from '../../caligraphy.png'
import caligraphyText from '../../caligraphyText.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

function Header() {

 
    return (

        <>
            <div id="header">
                
                <div className="cics-logo">
                        <Link to='/E-Commerce'>CICS</Link>
                </div>
                
                <div className="caligraphy-div">
                    <img src={caligraphy} alt="none" className="caligraphy-image"/> 
                        <span className="slash">|</span>        
                        <span className="caligraphy-text">
                            <img src={caligraphyText}  className="caligraphy-text-image"/>
                        </span>
                </div>

                <div className="header-links contact-us" >
                    <Link to='/signin' className="header-links-link">
                        <MdPermContactCalendar className='header-links-icon' size={30}  />
                            <a className='header-links-text'>
                                <a className='create'>Contact us</a>
                            </a>
                        </Link>
                </div>

                <div className="header-links projects">
                    <Link to='/signin' className="header-links-link">
                        <GoProject className='header-links-icon' size={30}  />
                            <a className='header-links-text'>
                                <a className='create'>Projects</a>
                            </a>
                        </Link>
                </div>
              
                <div className="header-links members">
                    <Link to='/signin' className="header-links-link">
                        <MdSupervisorAccount className='header-links-icon' size={30}  />
                            <a className='header-links-text'>
                                <a className='create'>Members</a>
                            </a>
                        </Link>
                </div>
                
         
            </div>

        </>
    )
}

export default Header
