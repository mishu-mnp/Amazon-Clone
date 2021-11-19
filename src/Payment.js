import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);

    const stripe = useStripe();
    const elements = useElements();


    const handleChange = event => {
        // handle change
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ")
    };

    const handleSubmit = async (event) => {
        // form submit
        event.preventDefault();
        setProcessing(true);

        // const payload = await 
    }

    return (
        <div className='payment'>
            <div className="payment__container">
                <h2>Checkout
                    <Link to='/checkout'>({basket?.length} items)</Link>
                </h2>

                {/* Payment Section --- Delievery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delievery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user ? user.email : 'Guest'}</p>
                        <p>142 Aakash Row House</p>
                        <p>Pandesara, Surat</p>
                    </div>
                </div>



                {/* Payment Section --- Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delievery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>


                {/* Payment Section --- Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe setup here */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || succeeded || disabled} >
                                    <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
