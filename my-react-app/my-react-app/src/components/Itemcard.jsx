import React from 'react'

function ItemCard({image,cakename}) {
    return (
      <div className="item-card">
        <img src={image} alt="Birthdaycake1"className="item-image" />
        <h3>{cakename}</h3>
        <button  className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    );
  };

export default ItemCard
