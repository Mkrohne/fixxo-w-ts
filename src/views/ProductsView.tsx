import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  document.title = 'Products | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView