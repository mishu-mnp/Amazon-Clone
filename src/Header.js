import React from 'react'
import images from './components/images'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ basket, dispatch }] = useStateValue();

    return (
        <div className='header'>

            <Link to='/' >
                <img className='header__logo' src={images.logo2} alt="amazon_logo" />
            </Link>

            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>


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

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className='header__basketIcon' />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
