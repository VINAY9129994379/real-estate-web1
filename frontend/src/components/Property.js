import React, { useState } from 'react';
import { properties } from '../assets/assets';
import './Property.css';
import Item from './Item';

function Property() {
  const [visibleProperties, setVisibleProperties] = useState(4);

  const handleViewMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 4); // Show 4 more properties each time
  };

  return (
    <div className='property'>
      <p>NEW PROPERTY</p>
      <h2>FOR SALE</h2>

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

      {/* Conditionally render the button if there are more properties to show */}
      {visibleProperties < properties.length && (
        <button className='btn' onClick={handleViewMore}>View More</button>
      )}
    </div>
  );
}

export default Property;
