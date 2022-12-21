import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import { ProductItem } from '../models/ProductModels'

interface FlashSaleSection_2Type {
  title: string
  items: ProductItem[]
}

const FlashSaleSection_2: React.FC<FlashSaleSection_2Type> = ({ title, items = [] }) => {

  const products = useContext(ProductContext) 

  return (
    <section className='flashsale-grid-2 container'>
      <div className='_grid-2'>
        {
          items.map(product => <ProductCard key={product.articleNumber} item={product} />)
        }
      </div>
      <div className='flashsale-box'>
        <h1 className='flashsales-title'>2 FOR USD $29</h1>
        <NavLink to='' className='btn-theme'>
          <span className='corner-left'></span>
          <span className='corner-right'></span>
          FLASH SALE
        </NavLink>
      </div>
    </section>
  )
}
export default FlashSaleSection_2