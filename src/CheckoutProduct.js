import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="checkoutProductImg" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <button>Remove Item</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
