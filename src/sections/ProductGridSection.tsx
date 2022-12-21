import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContext'
import { ProductItem } from '../models/ProductModels'

interface ProductGridType {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridType> = ({ title, items = [] }) => {

  const product = useContext(ProductContext)

  return (
    <section className='product-grid'>
      <div className='container'>
        <h1>{title}</h1>
        <div className='row row-cols-1 row-cols-md-4 row-cols-lg-3 row-cols-xl-4 g-4'>
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
          }
        </div>
      </div>
    </section>
  )
}
export default ProductGridSection