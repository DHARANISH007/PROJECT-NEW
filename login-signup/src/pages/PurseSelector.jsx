import React, { useState } from 'react';
import './PurseSelector.css';
// import pu from '../Assests/Perfect.jpep'
const PursesSelector = () => {
 
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [enteredName, setEnteredName] = useState('');

 
  const purseData = [
    { id: 1, color: 'Brown', size: 'Small' },
    { id: 2, color: 'Blue', size: 'Medium' },
    { id: 3, color: 'Black', size: 'Large' },
   
  ];

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleAddToCart = () => {
    
    console.log(`Added to cart: Color - ${selectedColor}, Size - ${selectedSize}, Name - ${enteredName}`);
  };

  return (
    <>
    <br/>
  
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='les'>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <h1 style={{color:"white"}}>Mens purse</h1>
      <div className='purse'>

      <div >
        <label htmlFor="color"><h3 style={{color:'white'}}>Color:</h3></label>
        <select id="color" value={selectedColor} onChange={handleColorChange}>
          <option value="">Select Color</option>
          {purseData.map((purse) => (
            <option key={purse.id} value={purse.color}>
              {purse.color}
            </option>
          ))}
        </select>
      </div>

      <div >
        
        <label htmlFor="size"><h3 style={{color:'white'}}>Size:</h3></label>
        <select id="size" value={selectedSize} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          {purseData.map((purse) => (
            <option key={purse.id} value={purse.size}>
              {purse.size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name" color='white'><h3 style={{color:'white'}}>Name:</h3></label>
        <input type="text" id="name" value={enteredName} onChange={handleNameChange} />
      </div>
       
              <button onClick={handleAddToCart}>Add to Cart</button>
   
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
  );
};

export default PursesSelector;
