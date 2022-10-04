import React, { useEffect, useState } from 'react';
import '../screenpages/page-css.css';
import './TableCoins-css.css';
import { selectCoins, selectStatus, selectTotalPage, selectCurentPage, setCurentPage, 
    getListCoins, getSortCoins} from '../../features/slice';
import { useSelector, useDispatch } from 'react-redux';


function RenderPageNumber(props) {

    const [isDisEnble, setIsDisEnable] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const curentPage = useSelector(selectCurentPage)+ 1;
    const totalPage = useSelector(selectTotalPage);
    const dispatch = useDispatch();

    const changePage = (page) => {
            dispatch(setCurentPage(page));
            dispatch(getListCoins(page));
       }
    return (
        <div className='table-footer'>
            <div className={curentPage == 1 ? 'previous-next disEnabled' : 'previous-next'}
            onClick = {() => {
                if(curentPage != 1 ){
                    changePage(curentPage-2)
                }
                
            }}
            >
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            {
                curentPage - 1 == 0 ? '' : <div className='page'
                onClick = {() => {
                        changePage(curentPage-2)
                    
                }}
                > {curentPage - 1}</div>

            }
            <div className='page active'>{curentPage}</div>
            <div className='page' 
             onClick = {() => {
                    changePage(curentPage)
                
            }}>{curentPage + 1}</div>
            {
                curentPage + 1 == totalPage ? '' : <div className='page'
                onClick = {() => {
                        changePage(curentPage+1)
                }}
                > {curentPage + 2}</div>

            }

            <div className='page'>...</div>
            <div className='page'
            onClick = {() => {
                    changePage(totalPage)
            }}
            >{totalPage}</div>
            <div className={curentPage == totalPage ? 'previous-next disEnabled' : 'previous-next'}
             onClick = {() => {
                    changePage(curentPage)    
            }}
            
            >
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    )
}

function TableCoins(props) {

    const [coins, setCoins] = useState();
    const data = useSelector(selectCoins);
    const isloading = useSelector(selectStatus);
    const [isFisrt, setIsFisrt] = useState(true);
    const dispatch = useDispatch();
    const [direction, setDirection] = useState(true)
    const sortCoin = (order, direction) => {
        const order1 = {
            "order":order,
            "direction": direction
        }
            dispatch(getSortCoins(order1));
       }

    useEffect(() => {

        if (isloading && isFisrt) {
            setCoins(data);
            setIsFisrt(false);
        } 

        if (!isFisrt && isloading){
            setCoins(data);
        } 
    }
    )
    return (
        <div className='table-coins'>
            <div className='table-caption'>
                <ion-icon name="swap-vertical-outline"></ion-icon>
                <a className='active'>All</a>
                <a>New</a>
                <a>Gainers</a>
                <a>Losers</a>
                <a>Meme</a>
                <a>Exchange</a>
                <a>NFT</a>
                <a>DeFi</a>
                <a>Gaming</a>
            </div>
            <div className='table-content'>
                <ul className='header-table'>
                    <li>All coins</li>
                    <li   onClick = {() => {
                    if(direction){
                        sortCoin('price', 'desc')    
                    } else {
                        sortCoin('price', 'asc')   
                    }
                    setDirection(!direction)
                  
            }}>Price</li>
                    <li onClick = {() => {
                    if(direction){
                        sortCoin('marketCap', 'desc')    
                    } else {
                        sortCoin('marketCap', 'asc')   
                    }
                    setDirection(!direction)  
            }}>Market cap</li>
                    <li onClick = {() => {
                    if(direction){
                        sortCoin('change', 'desc')    
                    } else {
                        sortCoin('change', 'asc')   
                    }
                    setDirection(!direction)  
            }}>1h</li>
                </ul>
                {!isFisrt ? coins.map((coins) =>
                <a href={'/coin/'+coins.uuid}>
 <ul key={coins.uuid}
                   
                    >
                        <li>
                            <span>{coins.rank}</span>
                            <img src={coins.iconUrl} />
                            <span>
                                <h4>{coins.name}</h4>
                                <p>{coins.symbol}</p>
                            </span>
                        </li>
                        <li>$ {Math.round(coins.price*100)/100 <= 1 ? coins.price : Math.round(coins.price*100)/100}</li>
                        <li>$ {Math.round(coins.marketCap/1000000000)} Billion</li>
                        <li  
                        style={{ color: coins.change < 0 ? 'red' : 'Blue'  }}
                        >
                            {coins.change}%</li>
                    </ul>
                </a>
                   
                )

                    :
                    ''

                }

            </div>

            <RenderPageNumber />

        </div>
    );
}

export default TableCoins;