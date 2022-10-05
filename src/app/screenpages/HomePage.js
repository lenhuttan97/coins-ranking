import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import TableCoins from '../component/TableCoins';
import MarketStatistics from '../component/MarketStatistics';
import Footer from '../component/Footer';
import './page-css.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCoins, getListCoins, selectStatus, setCurentPage } from '../../features/slice';

function HomePage(props) {
    const data = useSelector(selectCoins);
    const isloading = useSelector(selectStatus);
    const [isFisrt, setIsFisrt] = useState(false);
    const [marketStatistics, setMarketStatistics] = useState();
    const [listCoins, setListCoins] = useState();
    const dispatch = useDispatch();

    const search = props.search;

    useEffect(() => {
        if (!isFisrt && search) {
            dispatch(setCurentPage(0));
            dispatch(getListCoins(0));
            setIsFisrt(true);
        }
    }
    )
    return (
        <div className='body'>
            <header className='container'>
                <Header
                    language="en"
                    volume="24h"
                />
            </header>
            <div className='container'>
                <MarketStatistics />
            </div>
            <div className='container'>
                <div className='description'>
                    <h2>Cryptocurrency price list</h2>
                    <p>All cryptocurrencies ranked by market cap.</p>
                </div>
                <TableCoins />
            </div>
            <div className='container' style={{marginBottom: "0px"}}>
            <Footer />
            </div>
     

        </div>
    );
}

export default HomePage;