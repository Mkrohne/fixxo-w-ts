import { NavLink } from 'react-router-dom'

const ShowCaseSection: React.FC = () => {
  return (
    <div className='showcase'>
      <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" className="showcase-image-left" alt="showcase-img-1" />
      <div className='showcase-body'>
          <h1>Sale Up</h1>
          <h1>To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <NavLink to={'/Products'}>
            <button className='btn-theme'>
                <span className='corner-left'></span>
                SHOP NOW
                <span className='corner-right'></span>
            </button>
          </NavLink>
      </div>
      <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" className="showcase-image-right" alt="showcase-img-1" />
    </div>
  )
}

export default ShowCaseSection