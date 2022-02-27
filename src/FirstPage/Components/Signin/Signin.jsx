import React from 'react'
import ayat from './Pics/ayat.jpg'
import ayatTranslation from './Pics/translation.jpg'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  './Signin.css'

function Signin() {
    return (
        <div className='signinmainbox'>
            <div className='signin-picbox'>
                <img className='signin-picbox-img' src={ayat}/>
            </div>
            
            <div className='signin-picbox2'>
               <h2>Became a part of Our Mission</h2>
                
                <p className='signin-text'>
                    CICS is dedicated to deliver the Islamic Ideology to the youth in a modern way. 
                    We delivery the bigger picture of Islam to the society .
                    Be a member of this mission .
                    Join CICS today
                </p>
                
                <div className='create-account-buton'>
                    <Link to='/signin'>
                        <button className='btn btn-dark'>Join the Community</button>
                    </Link>
                </div>

            </div>

            <div className='signin-picbox3'>
                <img className='signin-picbox-img3' src={ayatTranslation}/>
            </div>
       
        </div>
    )
}

export default Signin