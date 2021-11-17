import React from 'react'
// import images from './components/images'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, rating, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    console.log('This is basket', basket);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                titile: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


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

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
