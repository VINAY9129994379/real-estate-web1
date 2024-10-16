import React, { useState } from 'react';
import { properties } from '../assets/assets';
import './RentProperty.css'
import Item from './Item';
function RentProperty() {
    const [visibleProperties, setVisibleProperties] = useState(4);

    const handleViewMore = () => {
      setVisibleProperties((prevVisible) => prevVisible + 4); // Show 4 more properties each time
    };
  return (
    <div className='rent-property'>
        <div className='rent-heading'>
            <p>NEW PROPERTIES</p>
            <h1>FOR RENT</h1>
        </div>
        <div className='rent-property-details'>
        <div className='property-houses'>
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

export default RentProperty