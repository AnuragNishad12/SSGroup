import React from 'react'
import '../App.css'
import logo from '../Assets/Images/ss.png'
import video from '../Assets/Images/resturants.mp4'
import hotels from '../Assets/Images/hotels.jpg'
import sweets from '../Assets/Images/sweets.jpg'
import ban from '../Assets/Images/ban.jpg'
import rest from '../Assets/Images/resturants.jpg'

function Navbar() {
  return (
    <div>
      <div className='container'>
        <div className='image'>  <img src={logo} alt=''/></div>
        <div className='menu'>
          <div className='menu-item'>
            <h1>Home</h1>
            <h1>Hotels</h1>
            <h1>Resturants</h1>
            <h1>SweetsShops</h1>
            <h1>Banquets</h1>
            <h1>More</h1>
          </div>
        </div>
        </div>
        <div className='section'>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: "100%", height: "auto" }} // Make video responsive
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
          </div>
          <h1></h1>
          <div className='section2'>
            <div className='hotels'>
            <div className='hotels-details'>
                <h1>SS Hotels</h1>
                <h3>An elevated open garden overlooking the Arabian Sea.</h3>
                <div className="explore-container">
      <div className="explore-line"></div>
      <span className="explore-text">EXPLORE</span>
    </div>
              </div>
              <img src={hotels} alt=''width={600} 
              height={300} 
              style={{ borderRadius: '10px' }} />
             
            </div>
          </div>
          <div className='section2'>
            <div className='hotels'>
            
              <img src={sweets} alt=''width={600} 
              height={300} 
              style={{ borderRadius: '10px' }} />
              <div className='hotels-details'>
                <h1>Sweets And Fast Foods</h1>
                <h3>An elevated open garden overlooking the Arabian Sea.</h3>
                <div className="explore-container">
      <div className="explore-line"></div>
      <span className="explore-text">EXPLORE</span>
    </div>
              </div>
             
            </div>
          </div>
          <div className='section2'>
            <div className='hotels'>
            <div className='hotels-details'>
                <h1>Banquets Hall</h1>
                <h3>An elevated open garden overlooking the Arabian Sea.</h3>
                <div className="explore-container">
      <div className="explore-line"></div>
      <span className="explore-text">EXPLORE</span>
    </div>
              </div>

              <img src={ban} alt=''width={600} 
              height={300} 
              style={{ borderRadius: '10px' }} />
            </div>
          </div>
          <div className='section2'>
            <div className='hotels'>
           

              <img src={rest} alt=''width={600} 
              height={300} 
              style={{ borderRadius: '10px' }} />
               <div className='hotels-details'>
                <h1>Resturants</h1>
                <h3>An elevated open garden overlooking the Arabian Sea.</h3>
                <div className="explore-container">
      <div className="explore-line"></div>
      <span className="explore-text">EXPLORE</span>
    </div>
              </div>
            </div>
          </div>

          <div className="footer">
      <div className="footer-content">
        <h1 className="footer-logo">SS Group</h1>
        {/* <div className="footer-links">
          <span>サイトマップ</span>
          <span>プライバシーポリシー</span>
          <span>サイトご利用規約</span>
          <span>お問い合わせ</span>
          <span>Abema公式ショップ</span>
        </div> */}
        <div className="footer-social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <button className="footer-language-button">English</button>
        <p className="footer-copyright">Copyright © CyberAgent, Inc.</p>
      </div>
    </div>
    </div>
  )
}

export default Navbar
