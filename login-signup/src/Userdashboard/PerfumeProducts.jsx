// PerfumeProducts.jsx

import React from 'react';

const PerfumeProducts = () => {
  const perfumeProducts = [
    {
      id: 1,
      name: 'Sauvage',
      imageURL: 'https://the-fragrance-shop.imgix.net/products/54019-newest2.jpg?w=991&dpr=2',
      link:'https://www.dior.com/en_int/beauty/products/Y0998004-sauvage-parfum-parfum-citrus-and-woody-notes-refillable'
    },
    {
      id: 2,
      name: 'CK',
      imageURL: 'https://the-fragrance-shop.imgix.net/products/20_stockzoomed.jpg?w=991&dpr=2',
      linl:'https://www.perfume24x7.com/collections/calvin-klein-perfumes/products/calvin-klein-one-for-men'
    },
    {
      id: 3,
      name: 'GOlden Sand',
      imageURL: 'https://upsilonofficial.com/cdn/shop/products/GS-01.jpg?v=1680767991&width=1200',
      link:'https://upsilonofficial.com/products/golden-sand-oud-perfume-for-men?variant=43479495573716&currency=INR&gad_source=1',
    },
    {
      id: 4,
      name: 'Shooting stars',
      imageURL: 'https://upsilonofficial.com/cdn/shop/files/509065799-ss-03.jpg?v=1686563252&width=1200',
      link:'https://upsilonofficial.com/products/upsilon-shooting-star-party-perfume-for-men-20-ml?pr_prod_strat=use_description&pr_rec_id=2397a5738&pr_rec_pid=7927035232468&pr_ref_pid=7816662122708&pr_seq=uniform',
    },{
      id: 5,
      name: 'Oud arabia',
      imageURL: 'https://oudarabiadubai.com/cdn/shop/files/WhatsApp-Image-2020-10-19-at-11.24.07-AM.jpg?v=1692390718&width=1080',
      link:'https://oudarabiadubai.com/products/rouge-540-100ml?variant=46348231704893&currency=INR&gad_source=1',
    },
    {
      id: 6,
      name: 'TUXedo',
      imageURL: 'https://mocemsa.com/cdn/shop/files/DSC9663_1080x.jpg?v=1683993671',
      link:'https://mocemsa.com/products/tuxedo?variant=40865838104623&currency=INR',
    },
  ];

  return (
    <div style={{backgroundColor:"black"}}>
    <br/>
    <br/>
  
    <br/>
    <br/>
    <div>
      <h1>Perfume Products</h1>
      <div className="perfume-container">
        {perfumeProducts.map(product => (
          <div key={product.id} className="perfume-item">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img src={product.imageURL} alt={product.name} />
              </a>
            <p className="perfume-name">{product.name}</p>
          </div>
        ))}
      </div>
  
      {/* Add CSS for Flexbox styling and custom styles */}
      <style jsx>{`
        .perfume-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .perfume-item {
          width: 30%; /* Adjust as needed */
          margin-bottom: 20px;
          text-align: center;
        }

        .perfume-name {
          color: white;
          font-family: 'YourDecorativeFont', cursive;
          margin-top: 10px; /* Adjust as needed */
        }

        .perfume-item img {
          width: 100%;
          max-height: 300px; /* Adjust as needed */
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </div>
    </div>
  );
};

export default PerfumeProducts;