 import React from 'react'
 import { useState,useEffect,Component } from 'react';
 import {useParams } from "react-router-dom";
 import axios from 'axios';
 import {Spinner} from 'react-bootstrap';
 import '../index';
 import ReactHtmlParser from 'react-html-parser';
 import { SingleCoine } from "../api";
 import CoinInfo from './CoinInfo';
 const SingleCoin = () => {
const {id}=useParams();

    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const [coin, setCoin] = useState();
    const [isfetch,setisfetch]=useState(false)
    const [onecoin,setonecoin]=useState();
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoine(id));
      setisfetch(true)
      setCoin(data);
    };
    useEffect(  () => {
      fetchCoin();
    }, []);
    console.log(coin);
    
     return (
      <div>
        {
          isfetch ? (
            <div className='singlecoin'>


            <div className='left-sidebar'>
          <img src={coin?.image.large} style={{width:"30%"}}></img>
          <h2>{coin?.name}</h2>

          <p  className='left-compo'>{ReactHtmlParser(coin?.description.en.split(". ")[0])}.</p>

          <h3 className='left-compo' id='rank'>Rank: { coin?.market_cap_rank}</h3>

           <h4 className='left-compo'>Current-Price:{`  `}${ coin?.market_data.current_price["usd"]}</h4>

           <h4 className='left-compo'>Market-Cap:{`  `}{coin?.market_data.market_cap["usd"]}</h4>
          </div>


          <div className='right-sidebar'>
          <CoinInfo coin={coin} />
          </div>   


         </div>
          ):<Spinner animation="grow"  style={{width:"20vw",height:"20vw",marginTop:"10vh",color:"yellowgreen"}}/>
          
        }
        
        </div>
     )
 }
 
 export default SingleCoin
 
