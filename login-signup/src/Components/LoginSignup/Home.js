// import { Button } from '@mui/material';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import img01 from '../Assests/img-1.png';
// import './Home.css'
// export default function Home() {
//   // const history = useHistory();

//   // const handleClick = () => {
//   //   history.push('/LoginSignup');
//   // };
//   const navigate = useNavigate() ;
//   const D ={
//     width:'450px',
//     height: '450px' ,
//     align:'center'
//   }
//   return (
//     <>

//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <div>
//     <h1>Welcome to Joyful Moments</h1></div>
//     <div className='flex-container'>
//       <div>
//       <img style={D} src={img01} alt=''/><p><br/></p>
//       </div><div>
//       Discover the Art of Gifting

//       At Joyful Moments, we believe in transforming ordinary occasions into extraordinary memories. Welcome to a world where thoughtful gifts meet unforgettable moments!

//       Unwrap the Joy: Featured Products
//       Explore our curated collection of handpicked gifts that are perfect for every occasion. From personalized keepsakes to artisanal creations, each item is crafted with care and creativity.

//       Featured Products:

//       Personalized Engraved Jewelry
//       Handcrafted Holiday Ornaments
//       Luxurious Spa Gift Sets
//       🎁 Limited Time Offer: 15% off our Holiday Collection! 🎁
//       Browse Our Full Selection Now!

//       <br/>

//     <Button color='blue' size="large" variant="outline" onClick={()=>navigate('logsig')}><h3>Login/Signup</h3></Button>
//     </div>
//     </div>
//     </>
//   );
// }

import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img01 from '../Assests/img-1.png';
import './Home2.css';
import Footer from './Footer';

export default function Home() {
  const navigate = useNavigate();
  const D = {
    width: '450px',
    height: '450px',
    align: 'center',
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="home-container">
        <h1>Welcome to Joyful Moments</h1>
        <div className="flex-container">
          <div className="image-container">
            <img style={D} src={img01} alt="" />
            <p>
              <br />
            </p>
          </div>
          <div className="description-container">
            {/* Your existing content */}
            {/* ... */}
            Discover the Art of Gifting

      At Joyful Moments, we believe in transforming ordinary occasions into extraordinary memories. Welcome to a world where thoughtful gifts meet unforgettable moments!

      Unwrap the Joy: Featured Products
      Explore our curated collection of handpicked gifts that are perfect for every occasion. From personalized keepsakes to artisanal creations, each item is crafted with care and creativity.

      Featured Products:

      Personalized Engraved Jewelry
      Handcrafted Holiday Ornaments
      Luxurious Spa  Sets
      🎁 Limited Time Offer: 15% off our Holiday Collection! 🎁
            <div className="button-container">
              <Button
                color="blue"
                size="small"
                variant="outline"
                onClick={() => navigate('log')}
              >
                <h3>Login</h3>
              </Button>
              <Button
                color="blue"
                size="small"
                variant="outline"
                onClick={() => navigate('sig')}
              >
                <h3>Signup</h3>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
