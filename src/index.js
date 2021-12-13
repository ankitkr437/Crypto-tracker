import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import 'react-alice-carousel/lib/alice-carousel.css';
ReactDOM.render(
  <BrowserRouter>
  <center>
    <App  />
    </center>
    </BrowserRouter>,
  document.getElementById('root')
);
 






 // <div>
        // {  
        // coins.map((coin,i)=>{
        //   return(
        //     <Carousel key={i} autoPlay onClick={()=>{

        //     }}  >
        // <Carousel.Item>
        //   <img
        //     // className="d-block w-43"
        //     src={coin.image}
        //     alt="First slide"
        //     style={{width:"10vw"}}
        //   />
        //  <div> 
        //     <h3 style={{color:"white"}}>{coin.name}</h3>
        //     {
        //        coin.price_change_percentage_24h > 0 ?
        //         <p style={{color:"white"}}>+{coin.price_change_percentage_24h}</p>
        //        : <p style={{color:"white"}}>-{coin.price_change_percentage_24h}</p>
        //     }
        //     <p style={{color:"white",marginBottom:"40px"}}>Market-cap-rank:{coin.market_cap_rank}</p>
        //     </div>
        // </Carousel.Item>
        // </Carousel>
        //   )
        
        // } )
        // }
        // </div>