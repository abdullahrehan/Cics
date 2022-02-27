import React from 'react'
import MediaPic from './Pics/29536_Media_Ministry-e1591501037221.jpg'
import managementPic from './Pics/169907f24868c11ea9a3da5089e6f8bf.jpeg'
import webDevelopmentPic from './Pics/Blog-Types-of-Web-Dev.jpg'
import bloodDonationPic from './Pics/blood-donation.jpg'
import  './Firstdivforsale.css'

function Firstdivforsale() {


    const smoredata=[
        {title:"Event Management",Pic:managementPic},
        {title:"Web Development",Pic:webDevelopmentPic},
        {title:"Media Team",Pic:MediaPic},
        {title:"Blood Donation",Pic:bloodDonationPic},
      
    ]

    return (

        <div className='maindivfdfs' id="firstdivforsale">
           
           {smoredata.map((Smordata)=>(
            <>
                <div className="fdfds-divno1">
                    
                    <div className="fdfds-divno2">{Smordata.title}</div>
                    
                    <div className="fdfds-divno4">
                        <img src={Smordata.Pic} className='amzbasic'/>
                        <div className="hoverdiv">Show More</div>
                    </div>

                </div>
            </>
           ))}

           
        </div>
    )
}

export default Firstdivforsale
