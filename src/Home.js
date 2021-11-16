import React from 'react'
import images from './components/images'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__bgImg' src={images.amazonPrime} alt="homeBg" />
            </div>

            <div className="home__row">
                <Product id='216254' title='Rich Dad Poor Dad' price={25} image={images.rdpd} rating={3} />
                <Product id='318788' title='Python Crash Course' price={12} image={images.python} rating={5} />
            </div>

            <div className="home__row">
                <Product id='411879' title='HTML Crash Course' price={16} image={images.html} rating={4} />
                <Product id='284044' title='CSS Crash Course' price={21} image={images.css} rating={4} />
                <Product id='316988' title='Javascript Crash Course' price={40} image={images.javascript} rating={5} />
            </div>

            <div className="home__row">
                <Product id='632878' title='Full Stack Reactjs' price={51} image={images.reactjs} rating={5} />
            </div>

        </div>
    )
}

export default Home
