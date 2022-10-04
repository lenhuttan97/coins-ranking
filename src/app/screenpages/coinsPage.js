import React, { useEffect, useState } from 'react';
import './page-css.css';
import {
    useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCoinDetail, selectStatus, getCoinDetail } from '../../features/CoinSlide';
import Header from '../component/Header';
import { CanvasJS, CanvasJSChart } from 'canvasjs-react-charts';
import Footer from '../component/Footer';

function DrawnChart(props) {

    var data = [];
    var max = props.data[0];
    var min = props.data[0];

    for (var i = 0; i < props.data.length; i++) {
        if (max < props.data[i]) {
            max = props.data[i]*1.1
        }
        if (min > props.data[i]) {
            min = props.data[i]*0.9
        }

        data.push({
            y: Math.round(props.data[i]*1000)/1000
        });
    }


console.log(max)

console.log(min)

    console.log(data)


    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        responsive: true,
        maintainAspectRatio: false,
        axisY: {
            minimum: min,
            maximum: max,
        },

        data: [
			{
				type: "area",
				dataPoints: data
			}
			]
    }

    return <CanvasJSChart options={options} containerProps={{width: '100%',
        height: '100%'}}/>
}


function CoinsPage(props) {
    let { uuid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isGet, setisGet] = useState(false);
    const status = useSelector(selectStatus);
    const coinDetail = useSelector(selectCoinDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading) {
            dispatch(getCoinDetail(uuid));
            setIsLoading(!isLoading);
        }

        setisGet(status)

    })

    return (
        <div>
            <header className='container'>
                <Header
                    language="en"
                    volume="24h"
                />
            </header>
            <div className='body-coin container'>
                <div className='path-coin'>
                    <a href='/'>Coins</a>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <a href={'/coin/' + uuid}>{coinDetail.name}</a>
                </div>
                <div className='detail-coin'>
                    <div className='header-coin'>
                        <img src={coinDetail.iconUrl}></img>
                        <h2>{coinDetail.name}</h2>
                        <span className='option'># {coinDetail.rank}</span>
                        <div className='price-coin'>$ {coinDetail.price}</div>
                        <span className='option'>Live</span>
                    </div>
                    <div className='chart-price'>
                        <div className='chart'>
                            {isGet ? <DrawnChart data={coinDetail.sparkline} /> : ''}
                        </div>
                        <div className='option-chart'>
                            <ul>
                                <li>Time period</li>
                                <li>1h</li>
                                <li>3h</li>
                                <li>12h</li>
                                <li className='active'>24h</li>
                                <li>7d</li>
                                <li>30d</li>
                                <li>3m</li>
                                <li>All</li>
                            </ul>
                        </div>
                    </div>
                    <div className='infor'>
                        <div className='detail'>
                            <h2>What is {coinDetail.name}</h2>
                            <span>

                            </span>
                        </div>
                        <div className='Link'>
                            <h2>Links</h2>
                            <ul>
                                {isGet ? coinDetail.links.map((data, i) =>

                                    <li>
                                        <span>
                                            <ion-icon name="link-outline"></ion-icon>
                                            <h3>{data.type}</h3>
                                        </span>

                                        <a href={data.url}>{data.url}</a>
                                    </li>

                                ) : ''}

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container' style={{marginBottom: "0px"}}>
            <Footer />
            </div>
        </div>
    );
}

export default CoinsPage;