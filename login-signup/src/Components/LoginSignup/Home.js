import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img01 from '../Assests/img-1.png';
export default function Home() {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push('/LoginSignup');
  // };
  const navigate = useNavigate() ;
  const D ={
    width:'450px',
    height: '450px' ,
    align:'center'
  }
  return (
    <>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
    <h1>Welcome to Joyful Moments</h1></div>
    <p>

      <img style={D} src={img01} alt=''/><p><br/></p>
      Discover the Art of Gifting

      At Joyful Moments, we believe in transforming ordinary occasions into extraordinary memories. Welcome to a world where thoughtful gifts meet unforgettable moments!

      Unwrap the Joy: Featured Products
      Explore our curated collection of handpicked gifts that are perfect for every occasion. From personalized keepsakes to artisanal creations, each item is crafted with care and creativity.

      Featured Products:

      Personalized Engraved Jewelry
      Handcrafted Holiday Ornaments
      Luxurious Spa  Sets
      🎁 Limited Time Offer: 15% off our Holiday Collection! 🎁
    </p>
    <Button color='secondary' size="large" variant="filledTonal" onClick={()=>navigate('logsig')}><h3>Login/Signup</h3></Button>
    </>
  );
} 