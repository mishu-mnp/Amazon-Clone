import React from 'react';
import './Checkout.css';
import images from './components/images';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user, dispatch }] = useStateValue();

    return (
        <div className='checkout'>

            {/* Checkout Left */}
            <div className="checkout__left">
                <img className='checkout__ad' src={images.checkout} alt="checkoutOffer" />

                <div>
                    <h3 className='checkout__user'>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* Checkout Right */}
            <div className="checkout__right">
                <Subtotal />
            </div>


        </div>
    )
}

export default Checkout
