import React from 'react'
import images from './components/images'
import './Product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="product__info">
                <p claassName='product__description'>Rich Dad Poor Dad</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>16</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>


            <img className='product__img' src={images[3]} alt="richDadPoorDad" />

            <button>Add to cart</button>
        </div>
    )
}

export default Product
