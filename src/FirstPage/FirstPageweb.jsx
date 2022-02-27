import React from 'react'
import ImgSlidefrntpg from './Components/ImgSlidefrntpg/ImgSlidefrntpg'
import Firstdivforsale from './Components/Firstdivforsale/Firstdivforsale'
import Topselling from './Components/Topselling/Topselling'
import Yourstore from './Components/Yourstore/Yourstore'
import Watchlist from './Components/Watchlist/Watchlist'
import Signin from './Components/Signin/Signin'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FirstPageweb.css'


function Secoundpg() {
      
    return (

<>
    <div className='productpage'>
  
        <div className='imgslider'> 
            <ImgSlidefrntpg/>
        </div>
        
        <div className="firstdivforsale">
             <Firstdivforsale/>
        </div>
        
        <div className='signinbox'>
             <Signin/>
        </div>    
        
        <div className='Topselling-box'>
             <Topselling/>
        </div>     
        
        <div className='Yourstore-box'>
             <Yourstore/>
        </div>     
        
        <div className='Watchlist-box'>
             <Watchlist/>
        </div>     
     
    </div>
   
        
</>
)}

export default Secoundpg
