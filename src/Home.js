import React from 'react'
import images from './components/images'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__bgImg' src={images[2]} alt="homeBg" />
            </div>

        </div>
    )
}

export default Home
