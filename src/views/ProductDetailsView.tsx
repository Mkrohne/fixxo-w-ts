import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const productContext = useProductContext() as ProductContextType

    useEffect(() => {
      productContext.getProduct(id)
    }, [])

  return (
    <>
        <MainMenuSection /> 
        <BreadCrumbSection parentPage="Products" currentPage={productContext.product.name} />
        <ProductDetails item={productContext.product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView