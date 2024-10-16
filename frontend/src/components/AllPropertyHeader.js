import React, { useState } from 'react'
import './AllPropertyHeader.css'
import { allproperties } from '../assets/allproperty'
import Item from './Item';

function AllPropertyHeader() {
  const [visibleProperties, setVisibleProperties] = useState(4);

  const handleViewMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 4); // Show 4 more properties each time
  };
  return (
    <div className='all-property-contain'>
        <div className='all-property-center'>
        <p className='allproperty-heading-pa'>OUR EXCLUSIVE PROPERTIES</p>
        <h1 className='allproperty-heading-h'>All Properties</h1>
        </div>

        <br/>
        <hr/>
        
        <div className='all-property-details'>
        <div className='allproperty-houses'>
        {allproperties.slice(0, visibleProperties).map((item) => (
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
      {visibleProperties < allproperties.length && (
        <button className='btn' onClick={handleViewMore}>View More</button>
      )}
    </div>
  )
}
      

export default AllPropertyHeader