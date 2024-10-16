import React, { useState } from 'react'
import './BuyPropertyHeader.css'
import { properties } from '../assets/assets'
import Item from './Item';

function BuyPropertyHeader() {
  const [visibleProperties, setVisibleProperties] = useState(4);

  const handleViewMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 4); // Show 4 more properties each time
  };
  return (
    <div className='buy-property-contain'>
        <div className='buy-property-center'>
        <p className='buyproperty-heading-pa'>OUR EXCLUSIVE PROPERTIES</p>
        <h1 className='buyproperty-heading-h'>Buy</h1>
        </div>

        <br/>
        <hr/>
        
        <div className='-prbuyoperty-details'>
        <div className='buyproperty-houses'>
        {properties.slice(0, visibleProperties).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            address={item.address}
            price={item.price}
            image={item.image}
            details={item.details}  
          />
        ))}
      </div>

        </div>
         {/* Conditionally render the button if there are more properties to show */}
      {visibleProperties < properties.length && (
        <button className='btn' onClick={handleViewMore}>View More</button>
      )}
    </div>
  )
}
      

export default BuyPropertyHeader