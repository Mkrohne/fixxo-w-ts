import React from 'react'
import pamela from '../assets/Images/pamela.png'
import letsbe from '../assets/Images/lets-be.png'

const BannerSection:React.FC = () => {
  return (
    <div className='banners container'>
        <img className='leftimg' src={pamela} alt="" />
        <img className='rightimg' src={letsbe} alt="" />
    </div>
  )
}

export default BannerSection