import React from 'react'
import images from './components/images'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__bgImg' src={images[2]} alt="homeBg" />
            </div>

            <div className="home__row">
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>

        </div>
    )
}

export default Home
