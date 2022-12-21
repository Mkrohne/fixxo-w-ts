import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import { ProductItem } from '../models/ProductModels'

interface FlashSaleSection_1Type {
  title: string
  items: ProductItem[]
}

const FlashSaleSection_1: React.FC<FlashSaleSection_1Type> = ({ title, items = [] }) => {

  const products = useContext(ProductContext) 

  return (
    <section className='flashsale-grid container'>
      <div className='flashsale-box'>
        <h1 className='flashsales-title'>2 FOR USD $29</h1>
        <NavLink to='' className='btn-theme'>
          <span className='corner-left'></span>
          <span className='corner-right'></span>
          FLASH SALE
        </NavLink>
      </div>
      <div className='_grid'>
        {
          items.map(product => <ProductCard key={product.articleNumber} item={product} />)
        }
      </div>
    </section>
  )
}
export default FlashSaleSection_1