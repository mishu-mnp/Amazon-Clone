import React from 'react';
import './Checkout.css';
import images from './components/images';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>

            {/* Checkout Left */}
            <div className="checkout__left">
                <img className='checkout__ad' src={images.checkout} alt="checkoutOffer" />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
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
