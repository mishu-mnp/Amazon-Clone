import React from 'react'
// import images from './components/images'
import './Product.css'

const Product = ({ id, title, image, rating, price }) => {
    return (
        <div className='product'>
            <div className="product__info">
                <p claassName='product__description'>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>


            <img className='product__img' src={image} alt="bookImg" />

            <button>Add to cart</button>
        </div>
    )
}

export default Product
