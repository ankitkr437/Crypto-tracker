import React, { useState, useEffect,Component} from 'react'
import axios from 'axios';
import '../App'
import '../index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Banner from '../Components/Banner';
import ListCoin from '../Components/ListCoin'
import {Spinner} from 'react-bootstrap';
const HomeScreen = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [isfetch,setisfetch]=useState(false);
     const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
     
    useEffect(() => {
      axios
        .get(
           url
        )
        .then(res => {
          setCoins(res.data);
         setisfetch(true)
        })
        .catch(error => console.log(error));
    }, []);
  

    const handleChange = e => {
        setSearch(e.target.value);
      };
    
      const filteredCoins = coins.filter(coin =>
         coin.name.toLowerCase().includes(search.toLowerCase()) 
      );


    return (
        <>
        <div className='home'>
        <Banner></Banner> 
        </div>
        <div className='coin-app'>
      <div className='coin-search'>
        <h3 className='coin-text'>Search a currency</h3>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search For a Crypto Currency...'
          />
        </form>
      </div>
       
      {filteredCoins.map((coin,i) => {
        return (
          
          
          <ListCoin
            key ={i}
            id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          /> 
        );
      })}
    </div>
    </>
    )
}

export default HomeScreen
