import React from 'react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import cicsWalpaper from './cicsWallpaper.jpg'
import 'swiper/swiper-bundle.css'
import './ImgSlidefrntpg.css'

SwiperCore.use([Pagination,Navigation,Autoplay])

function ImgSlidefrntpg() {

   const picforslides=[
        {Pic:cicsWalpaper},
        {Pic:cicsWalpaper},
        {Pic:cicsWalpaper},
        {Pic:cicsWalpaper},
    ]

    
    let frntpgswiper=[]
   
        frntpgswiper.push(

        picforslides.map((image)=>(
            <SwiperSlide>
                <div> <img  src={image.Pic} /></div>
            </SwiperSlide>)))
    
    
    return (
        
        <div className="ImgSlidefrntpg">
       
            <Swiper pagination loop={true} navigation >
                {frntpgswiper}
            </Swiper>
       
        </div>
    )
}

export default ImgSlidefrntpg
