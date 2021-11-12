import React from 'react'
import images from './components/images'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <div className='header'>
            {/* logo */}
            <img className='header__logo' src={images[1]} alt="amazon_logo" />

            {/* search bar */}
            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* header nav */}
            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">Hello mishu</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon className='header__basketIcon' />
                    <span className="header__optionLineTwo header__basketCount"> 0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
