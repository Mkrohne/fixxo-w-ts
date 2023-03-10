import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const NotFoundView: React.FC = () => {
  document.title ='NOT FOUND | Fixxo.'
  return (
    <>
    <MainMenuSection />
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "500px"}}>
    <h1>404 - Page Not Found</h1>
      <div style={{ position: "fixed", bottom:"0"}}>
      </div>
    </div>
    <FooterSection />
  </>
  )
}

export default NotFoundView