import React from 'react'
import './index.css'

export const ShopexCard = ({image}) => {
  return (
    
        <div className='col-6 col-sm-3'>
            <div className='d-flex justify-content-center'>
            <img src={image} className="img-fluid shopex"/></div>
            <div className='text-center head'>24/7 Support</div>
            <div className='text-center para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</div>
        </div>
  )
}
