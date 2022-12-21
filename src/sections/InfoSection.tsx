import React from 'react'
import { NavLink } from 'react-router-dom'

const InfoSection:React.FC = () => {
  return (
    <div className='info-section container'>
        <div className='info'>
            <div className='box'>
                <button className='circle'><i className='fa-light fa-headset'></i></button>
                <h1>Customer Support</h1>
                <h3>Villages did removed emjoyed explain taling</h3>
            </div>
        </div>
        <div className='info'>
            <div className='box'>
                <button className='circle'><i className='fa-regular fa-credit-card-front'></i></button>
                <h1>Secured Payment</h1>
                <h3>Villages did removed emjoyed explain taling</h3>
            </div>
        </div>
        <div className='info'>
            <div className='box'>
                <button className='circle'><i className='fa-light fa-truck'></i></button>
                <h1>Free Home Delivery</h1>
                <h3>Villages did removed emjoyed explain taling</h3>
            </div>
        </div>
        <div className='info'>
            <div className='box'>
                <button className='circle'><i className='fa-light fa-truck'></i></button>
                <h1>30 Day Reuters</h1>
                <h3>Villages did removed emjoyed explain taling</h3>
            </div>
        </div>
    </div>
  )
}

export default InfoSection