import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import dummyMemberEdit1 from './dummy/dummyMemberEdit1.jpg'
import dummyMemberEdit2 from './dummy/dummyMemberEdit2.jpg'
import dummyMemberEdit3 from './dummy/dummyMemberEdit3.jpg'
import dummyMemberEdit4 from './dummy/dummyMemberEdit4.jpg'
import dummyMemberEdit5 from './dummy/dummyMemberEdit5.jpg'
import dummyMemberEdit6 from './dummy/dummyMemberEdit6.jpg'
import dummyMemberEdit7 from './dummy/dummyMemberEdit7.jpg'
import RecentProject1 from './Pics/pic1.jpg'
import RecentProject2 from './Pics/pic3.jpg'
import RecentProject3 from './Pics/pic5.jpg'
import RecentProject4 from './Pics/pic6.jpg'
import RecentProject5 from './Pics/pic7.jpg'
import 'swiper/swiper-bundle.css'
import './Topselling.css'

SwiperCore.use([Pagination,Navigation,Autoplay])

let imges=[
    {image:dummyMemberEdit1},
    {image:dummyMemberEdit2},
    {image:dummyMemberEdit3},
    {image:dummyMemberEdit4},
    {image:dummyMemberEdit5},
    {image:dummyMemberEdit6},
    {image:dummyMemberEdit7},


]
let imges2=[
    {image:RecentProject1},
    {image:RecentProject2},
    {image:RecentProject3},
    {image:RecentProject4},
    {image:RecentProject5},

]

function Topselling() {

    let topsellingslides=[];
    imges.map((imge)=>(topsellingslides.push(
    
    <SwiperSlide className='swiperslde'>
         <div> <img  src={imge.image} /> </div>
     </SwiperSlide>

    )))
    

    let topsellingslides2=[];
    imges2.map((imge)=>(topsellingslides2.push(
    
    <SwiperSlide className='swiperslde'>
         <div> <img  src={imge.image} /><div className="recentprojectsHover">View</div></div>
     </SwiperSlide>

    )))

    return (
     
    <div className='topsellingslidesdiv'>
        
        <div className='topsellingsliderdiv'>
            
            <Swiper loop={true} navigation slidesPerView='6' autoplay={{delay:"2000"}} >

            {topsellingslides}
    
            </Swiper>
            
            <div className='as' style={{top:"-3%"}}>
              
                <h4 >Welcome to our new Members</h4>
            
            </div>
        
        </div>

        <div className='topsellingsliderdiv2'>
            
            <div className='as'>
                
                <h4 >Recent Events</h4>
            
            </div>
            
            <Swiper slidesPerView='3' autoplay={{delay:"2400"}} loop={true} >
    
                {topsellingslides2}
    
            </Swiper>
            
        </div>

    </div>
         
    )
}

export default Topselling

