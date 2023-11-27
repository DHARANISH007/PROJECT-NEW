import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home2.css';
// import Footer from './Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
        <h1 className='X'>Welcome to Joyful Moments</h1>

      <div className="home-container">
        <div className="flex-container">
        <div className="flex-column" data-widget-name="Celebrate Milestones" data-widget-type="frames" data-widget-order="6" data-total-widget="13">
        <a className="image-container" onClick={()=>navigate('/pur')}>
          <img className="img-responsive" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_For_Her_d_frames_20220309.jpg" alt="Birthday Gifts for Women/Her" />
          <div className="image-overlay">
            <h2>Wallet/Purse</h2>
          </div>
        </a>
        <br/>
        <a className="image-container" onClick={()=>navigate('/Cakes')} >
          <img className="img-responsive" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_Cakes_d_frames_20220309.jpg" alt="Birthday Cakes" />
          <div className="image-overlay">
            <h2>Cakes</h2>
          </div>
        </a>
        <br/>
        <a className="image-container" onClick={()=>navigate('/per')}>
          <img className="img-responsive" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_Personalized_d_frames_20220309.jpg" alt="Personalized Birthday Gifts" />
          <div className="image-overlay">
            <h2>Perfumes</h2>
          </div>
        </a>
                  </div>
          </div>
          <div className="description-container">
            <h1>Discover the Art of Gifting</h1>
      <h2 style={{color:'#fff'}}>
      At Joyful Moments, we believe in transforming ordinary occasions into extraordinary memories. Welcome to a world where thoughtful gifts meet unforgettable moments!....
      Explore our curated collection of handpicked gifts that are perfect for every occasion. From personalized keepsakes to artisanal creations, each item is crafted with care and creativity.</h2><br/><br/>
      <marquee><h1 style={{color:'white' , fontFamily:'Lucida Handwriting'}}>🎁 Limited Time Offer: 15% off our Holiday Collection! 🎁</h1></marquee>
            
          </div>
        </div>
      {/* <Footer/> */}
    </>
  );
}
