import React from 'react';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import CropSquareIcon from '@mui/icons-material/CropSquare'; 
import './Item.css';

function Item({ image, title, address, price, details = {} }) {

  return (
    <div className='property-item-contain'>
      <img src={image} alt='property' className='property-image'/> 
      <h4>{title}</h4>
      <p>{address}</p>
      <h5>{price}</h5>
      <hr/>

      <div className='property-item-details'>
        {/* Optional chaining is used here to safely access details properties */}
        <p><BedroomParentIcon /><span>Beds: {details?.beds || '-'}</span></p> 
        <p><BathtubIcon /><span>Baths: {details?.baths || '-'}</span></p>
        <p><FormatAlignLeftIcon /><span>Levels: {details?.levels || '-'}</span></p>
        <p><CropSquareIcon /><span>Sqft: {details?.sqft || '-'}</span></p> 
      </div>
    </div>
  );
}

export default Item;
