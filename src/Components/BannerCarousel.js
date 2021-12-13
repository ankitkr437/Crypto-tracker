import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import "../index";
import { useState, useEffect } from "react";
const BannerCarousel = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const items = coins.map((coin, i) => {
    return (
      <Link to={`/coin/${coin.id}`} style={{textDecoration:"none"}}>
        <img src={coin.image} alt={coin.name} style={{ width: "6vw" }} />
        <div>
          <h5 style={{ color: "white" }}>{coin.name}</h5>
          {coin.price_change_percentage_24h > 0 ? (
            <p style={{ color: "lightgreen" }}>
              +{coin.price_change_percentage_24h}
            </p>
          ) : (
            <p style={{ color: "red" }}>
              -{coin.price_change_percentage_24h}
            </p>
          )}
          <p style={{ color: "white", marginBottom: "40px" }}>
            Market-cap-rank:{coin.market_cap_rank}
          </p>
        </div>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };
  return (
    <div>
      <AliceCarousel 
      mouseTracking 
      infinite
      autoPlayInterval={800}
      animationDuration={1300}
      disableDotsControls
      disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        />
    </div>
  );
};

export default BannerCarousel;
