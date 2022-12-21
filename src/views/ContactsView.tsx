import React from 'react'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'

const ContactsView: React.FC = () => {
  document.title ='Contacts | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage='Contacts'/>
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView

