import React, { useState } from 'react'
import './RentHeader.css'
import Item from './Item';
import { rentproperties } from '../assets/rentproperty';

function RentHeader() {
  const [visibleProperties, setVisibleProperties] = useState(4);

  const handleViewMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 4); // Show 4 more properties each time
  };
  return (
    <div className='rent-property-contain'>
        <div className='rent-property-center'>
        <p className='rentproperty-heading-pa'>OUR EXCLUSIVE PROPERTIES

</p>
        <h1 className='rentproperty-heading-h'>Rent
        </h1>
        </div>

        <br/>
        <hr/>
        
        <div className='rentproperty-details'>
        <div className='rentproperty-houses'>
        {rentproperties.slice(0, visibleProperties).map((item) => (
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
      {visibleProperties < rentproperties.length && (
        <button className='btn' onClick={handleViewMore}>View More</button>
      )}
    </div>
  )
}
      

export default RentHeader