import React, { useEffect, useState } from 'react';
import '../screenpages/page-css.css';
import './marketStatic-css.css';
import { selectStatus , selectStats} from '../../features/slice';
import { useSelector, useDispatch } from 'react-redux';

function MarketStatistics(props) {
    var marketData = {
        "total": 15830,
        "totalCoins": 15830,
        "totalMarkets": 29433,
        "totalExchanges": 17,
        "totalMarketCap": "946439709783",
        "total24hVolume": "38779731794"
    }
    const [market, setMarket] = useState(marketData);
    const data = useSelector(selectStats);
    const isloading = useSelector(selectStatus);
    const [isFisrt, setIsFisrt] = useState(true);

    useEffect(() => {  
    
        if(isloading && isFisrt){
            setMarket(data);
            setIsFisrt(false);
        }
    }
    )

    return (
        <div className='market-statistics'>
            <div className='content'>
                <h2>Cryptocurrency market statistics</h2>
                <p>An overview of the complete cryptocurrency market, including the number of cryptocurrencies, the total market cap, and trading volume.</p>
            </div>
            <div className='box-content'>
                <ul>
                    <li className='swarp'>
                        <span className='swarp'>
                            <ion-icon name="layers-outline"></ion-icon>
                            <h3>Crypto market cap</h3>
                        </span>
                        <h3>$ {Math.round(market.totalMarketCap/1000000000)} Billion</h3>
                    </li>
                    <li className='swarp'>
                        <span className='swarp'>
                            <ion-icon name="water-outline"></ion-icon>
                            <h3>24h volume</h3>
                        </span>
                        <h3>$ {Math.round(market.total24hVolume/1000000000)} Billion</h3>
                    </li>
                    <li className='swarp'>
                        <span className='swarp'>
                            <ion-icon name="logo-bitcoin"></ion-icon>
                            <h3>All coins</h3>
                        </span>
                        <h3>{market.total}</h3>
                    </li>
                    <li className='swarp'>
                        <span className='swarp'>
                            <ion-icon name="business-outline"></ion-icon>
                            <h3>All crypto exchanges</h3>
                        </span>
                        <h3>{market.totalExchanges}</h3>
                    </li>
                    <li className='swarp'>
                        <span className='swarp'>
                            <ion-icon name="wallet-outline"></ion-icon>
                            <h3>All crypto markets</h3>
                        </span>
                        <h3>{market.totalMarkets}</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MarketStatistics;