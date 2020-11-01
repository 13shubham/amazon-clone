import React from 'react'
import "./Home.css"
import Product from "./Product.js"

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      alt="" 
      />
      <div className="home__row">
        {/* Product id, title, price, rating, image */}
      <Product
       id="1234512"
       title="GOLDSTITCH: Friar Medieval Hooded Monk Renaissance Priest Robe..."
       price={41.99}
       rating={4.5}
       image="https://m.media-amazon.com/images/I/51ZL63fR5IL._AC_UL320_.jpg"
       />
       <Product
       id="1234513"
       title="nonda USB C to USB Adapter(2 Pack),USB-C to USB 3.0 Adapter,USB Type-C to USB"
       price={12.19}
       rating={4.5}
       image="https://images-na.ssl-images-amazon.com/images/I/61rcKIsJ2ML._AC_SL1500_.jpg"
       />
      </div>
      <div className="home__row">
        {/* Product id, title, price, rating, image */}
      <Product
       id="1234515"
       title="Acer Predator Helios 300 Gaming Laptop, 15.6' Full HD 144Hz IPS , Ci7-10750H, RTX 2060 , 16GB DDR4, 512SSD, PH315-53-72XD"
       price={1,699.00}
       rating={4.5}
       image="https://m.media-amazon.com/images/I/51UQDEuqoiL._AC_SY161_.jpg"
       />
       <Product
       id="1234516"
       title="PUMA Unisex Evercat Dispatch Duffel Sports Duffel Bags"
       price={68.99}
       rating={4.5}
       image="https://images-na.ssl-images-amazon.com/images/I/51FPSNPu-LL._AA218_.jpg"
       />
        <Product
       id="1234517"
       title="Relic by Fossil Men's Mark Leather Traveler Bifold Wallet, Black"
       price={1,198.00}
       rating={4.5}
       image="https://images-na.ssl-images-amazon.com/images/I/41RuPaTgHbL._AA218_.jpg"
       />
       </div>
       <div className="home__row">
       <Product
       id="1234512"
       title="Sony X800H 65-inch 4K HDR LED Android Smart TV"
       price={41.99}
       rating={4.5}
       image="https://images-na.ssl-images-amazon.com/images/I/71%2BF%2BeS7qfL._AC_SY355_.jpg"
       />
       </div>
    </div>
  );
}

export default Home
