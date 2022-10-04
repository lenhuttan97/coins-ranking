import React, { useState } from 'react';
import '../screenpages/page-css.css';
import './header-css.css'
import { getSearchCoins} from '../../features/slice';
import { useDispatch } from 'react-redux';


function Header(props) {

    const [isSearch , setIsSearch] = useState(false);
    var [volume, setVolume] = useState(props.volume)
    const dispatch = useDispatch();
    // const state = this.props;

        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            dispatch(getSearchCoins(event.target.value));
            setIsSearch(false);
            window.location.href = '/';
          }
        }
    

    return (
        <div className='header swarp flex-center'>
            <div className='swarp logo'>
                <img src='https://cdn.coinranking.com/assets/90b2125641bd3178ae387e204a78488d.svg' />
                <a href='/'>Coinranking</a>
            </div>
            {isSearch ? <input 
            type="text" 
            className="input-search"
             placeholder="Search..." 
             onKeyDown={handleKeyDown}
             /> : ''}
            {isSearch ? '': <div className='slogan'>
                <h4>Discover BetFury - Leading Crypto Casino</h4>
            </div> }
            <div className='left-side swarp'>
                <div className="dropdown">
                    <div className='dropdown-select'>
                        <span>{volume}</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </div>
                    <ul className="dropdown-menu">
                        <li  onClick={() => setVolume("1h")   }>1h</li>
                        <li onClick={() => setVolume("3h")} >3h</li>
                        <li onClick={() => setVolume("12h") }>12h</li>
                        <li onClick={() => setVolume("24h") }>24h</li>
                        <li onClick={() => setVolume("7d") }>7d</li>
                        <li onClick={() => setVolume("30d") }>30d</li>
                    </ul>
                </div>
                <div className='search'
                  onClick={() => setIsSearch(!isSearch)                  
                  }>
                <span className='seach-icon'
              
                >Search</span>
                <ion-icon name="search-outline"></ion-icon>
                </div>
               
            </div>
        </div>
    );
}

export default Header;