import React,{useState} from 'react'
import *as Ficons from "react-icons/fi";
import { Link } from 'react-router-dom';
import {ImCross} from "react-icons/im";
import { FaUserCircle } from 'react-icons/fa';
import Sidebarfrontdata from './Sidebarfrontdata';
import  Sidebarfrontdata2 from './Sidebarfrontdata2';
import { MdKeyboardArrowRight as Arrow } from 'react-icons/md';
import { AiOutlineArrowLeft as Arrowback } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import 'bootstrap/dist/css/bootstrap.min.css'
import _ from 'lodash'
import './Sidebar.css'


function Sidebar() {
const [sidebarsendpg,setsidebarsendpg]=useState(Sidebarfrontdata)
const [sidebar,setSidebar]=useState(false);


const paginatesidebar=(nvsb)=>{
  
  nextslide() 
  const calculation=(nvsb.divno-1)*5
  const newarray=_(Sidebarfrontdata2).slice(calculation).take(5).value()
  setsidebarsendpg(newarray);

}


const sidebarbtn = ()=>{

  setSidebar (!sidebar)
  if(!sidebar==true){
    document.getElementById('blasckscreen').style.display='block'
    document.body.style.backgroundColor='#0009'
    document.body.style.overflow='hidden'

}
  else{document.getElementById('blasckscreen').style.display='none'
  document.body.style.overflow='visible'
  document.body.style.backgroundColor='white'
}


}
 


const nextslide=()=>{

  document.getElementById("sideopen").classList.toggle("two");

}



  return (
  <>

  <a onClick={sidebarbtn}><Ficons.FiMenu size={34} className='menu-icon'/></a>
  <div className="blasckscreen" id='blasckscreen' onClick={sidebarbtn}></div>
  <div className={sidebar ? "newside":"side"}>  

  <div className='gretuser'><h3><div className='gret-text'> <FaUserCircle size={35} className='gret-icon' /><p className='hello'>Hello ,Sign In</p> </div></h3></div>
  <div className='cancel'><a onClick={sidebarbtn}><ImCross size={25} className='cancelIcon'/></a></div>
  <div className="menu-item-1"><HiOutlineShoppingBag style={{marginTop:'5%',marginLeft:"5%"}}/><a className="shopbycat" >Shop by Catagory</a></div>

  {Sidebarfrontdata.map((nvsb)=>(

  <div className={nvsb.className} onClick={()=>paginatesidebar(nvsb)} onClick={()=>paginatesidebar(nvsb)}> <div className='textareasidebar'> {nvsb.title} <Arrow className='arrow'/><hr/> </div> </div>

  ))}

  <div id='sideopen' className="menu-next-div">
  <div onClick={nextslide} className='mainmenu'><a className='mainmenutext'><Arrowback style={{color:"black"}}/>Main Menu</a></div><hr/>
    {sidebarsendpg.map((nvsb2)=>(
          <>
          <Link to='/products' onClick={sidebarbtn} > <div className='asdf'> <div className='textareasidebar2' >{nvsb2.as} {nvsb2.title} </div> </div></Link>
            <hr className='border-botom'/>
          </>
  ))}

</div>


</div>

</>)}

export default Sidebar

