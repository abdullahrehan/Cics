import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import dummyMemberEdit2 from './Pics/dummyMemberEdit2.jpg'
import dummyMemberEdit3 from './Pics/dummyMemberEdit3.jpg'
import dummyMemberEdit4 from './Pics/dummyMemberEdit4.jpg'
import dummyMemberEdit5 from './Pics/dummyMemberEdit5.jpg'
import dummyMemberEdit6 from './Pics/dummyMemberEdit6.jpg'
import dummyMemberEdit7 from './Pics/dummyMemberEdit7.jpg' 
import dummyMemberEdit1 from './Pics/dummyMemberEdit1.jpg' 
import 'swiper/swiper-bundle.css'
import './Watchlist.css'

SwiperCore.use([Pagination,Navigation,Autoplay])

let imges=[
    {image:dummyMemberEdit1},
    {image:dummyMemberEdit4},
    {image:dummyMemberEdit6},
    {image:dummyMemberEdit7}, 
    {image:dummyMemberEdit5},
    {image:dummyMemberEdit3},
    {image:dummyMemberEdit2},
   


]

function Watchlist() {

    let topsellingslides=[];
    imges.map((imge)=>(topsellingslides.push(
    
    <SwiperSlide className='swiperslde2'>
         <div> <img  src={imge.image} style={{width:"75%"}}/></div>
     </SwiperSlide>

    )))

    return (
        <div className='Watchlist-maindiv'>
           
            <div className='watclist-header-div'><h2>Xcome Members</h2></div>
            
            <div className='Watchlist-sliderdiv'>
            
                <Swiper loop={true} navigation slidesPerView='6' autoplay={{delay:"2000"}} >

                            {topsellingslides}
                    
                </Swiper>
            
            </div>
            
             <hr></hr>
        
        </div>
    )
}

export default Watchlist
