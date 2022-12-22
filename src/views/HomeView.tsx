import React, { useEffect } from 'react'
import BannerSection from '../sections/BannerSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import FlashSaleSection_1 from '../sections/FlashSaleSection_1'
import FlashSaleSection_2 from '../sections/FlashSaleSection_2'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import InfoSection from '../sections/InfoSection'
import Divider from '../components/Divider'

const HomeView: React.FC = () => {
  const {FeaturedProducts, FlashSaleProducts_1, FlashSaleProducts_2, getFeaturedProducts, getFlashSaleProducts_1, getFlashSaleProducts_2} = useProductContext() as ProductContextType
  document.title = 'Fixxo.'

  useEffect(() => {
    getFeaturedProducts(8)
    getFlashSaleProducts_1(4)
    getFlashSaleProducts_2(4)
  }, [])

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowCaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={FeaturedProducts} />
      <BannerSection />
      <FlashSaleSection_1 title='Flashsale1' items={FlashSaleProducts_1}/>
      <FlashSaleSection_2 title='Flashsale2' items={FlashSaleProducts_2}/>
      <Divider />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView

