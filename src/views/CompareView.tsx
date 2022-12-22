import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const CompareView: React.FC = () => {
  document.title ='Compare | Fixxo.'
  return (
    <>
        <MainMenuSection />
        <FooterSection />
    </>
  )
}

export default CompareView