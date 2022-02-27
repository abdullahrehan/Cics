import React from 'react'
import IslamicArt from './Pics/pic8.jpg'
import Immagination from './Pics/pic9.jpg.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import  './Yourstore.css'

function Yourstore() {
    return (
        <div className='Yourstore-maindiv'>
         
            <div className="yorstore-subdiv1">
            
                <img src={IslamicArt} className='bag-pic'/>
            
            </div>
            
            <div className="yorstore-subdiv2">
            
                <h2>Explore Yourself</h2>
                
                <a style={{color:'black'}} className="yorstore-text">
                    Bring your ideas into reality .
                    Explore yourself .
                    Enhance your management and professional skills 
                    <br/>Join the community today.
                </a>
                
                <br/>
                
                <div className='Yourstore-button'>
                    <Link to='/signin'>
                        <button className='btn btn-dark'>
                            Became a member
                        </button>
                    </Link>
                </div>
            
            </div>
            
            <div className="yorstore-subdiv3">
                <img src={Immagination} className='boxes-pic Immagination'/>
            </div>
        
        </div>
    )
}

export default Yourstore
