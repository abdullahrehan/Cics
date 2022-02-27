import React,{useState} from 'react'
import FirstPageweb from './FirstPage/FirstPageweb.jsx'
import {Switch,Route} from 'react-router-dom'
import Header from './FirstPage/Components/Header/Header'
import Sidebar from './FirstPage/Components/Sidebar/Sidebar'
import Enddiv from './FirstPage/Components/Enddiv/Enddiv'
import './App.css'


function App() {
    const [preloader,setpreloader]=useState(false)
    return (

        <div className="Appjs-main-div " onLoad={()=>setpreloader(true)}>
        
            <div className={preloader ? "pre-loader-display" : 'preloader' }></div>

            <div><Header></Header></div>
            
            <div><Sidebar></Sidebar></div>
            
            <Switch>
            
                <Route path="/E-Commerce"component={FirstPageweb} exact ></Route>

            </Switch>
            
            <footer>
                <div className='end-div'>
                    <Enddiv/>
                </div>
            </footer> 
        
        </div>
    )
}

export default App
