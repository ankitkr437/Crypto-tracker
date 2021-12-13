import React from 'react';
import './Coin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  
  return (
    <div className='coin-container'>
    <Link to={`/coin/${id}`} style={{textDecoration:"none"}}>
      <div className='coin-row' style={{color:"white"}}>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Coin;


{/* <thead>
<tr>
  <th>Logo</th>
  <th>Name</th>
  <th>Symbol</th>
  <th>Price</th>
  <th>Volume</th>
  <th>Price-Change</th>
  <th>Market-Cap</th>
</tr>
</thead> */}

// {/* <div className='coin-container'> */}
//     <Link to={`/coin/${id}`} style={{textDecoration:"none"}}>
//       <div className='coin-row' style={{color:"white"}}>
//         <div className='coin'>
//           <img src={image} alt='crypto' />
//           <h1>{name}</h1>
//           <p className='coin-symbol'>{symbol}</p>
//         </div>
//         <div className='coin-data'>
//           <p className='coin-price'>${price}</p>
//           <p className='coin-volume'>${volume.toLocaleString()}</p>

//           {priceChange < 0 ? (
//             <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
//           ) : (
//             <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
//           )}

//           <p className='coin-marketcap'>
//             Mkt Cap: ${marketcap.toLocaleString()}
//           </p>
//         </div>
//       </div>
//       </Link>
//     </div>
{/* <Table hover>
<Link to={`/coin/${id}`} style={{ textDecoration: "none" }}>
  <tbody  style={{borderBottom:"2px solid yellow",color:"white"}}>
    <tr>
      <td className="rowlist">
        <img src={image} alt="crypto" style={{width:"25px",height:"25px"}}/>
      </td>
      <td className="rowlist">{name}</td>
      <td className="rowlist">{symbol}</td>
      <td className="rowlist">${price}</td>
      <td className="rowlist">${volume.toLocaleString()}</td>
      <td className="rowlist">
      {priceChange < 0 ? (
       <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
     ) : (
       <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
     )}
      </td> 
      <td className="rowlist" style={{margin:"120px"}}>${marketcap.toLocaleString()}</td>
    </tr>
  </tbody>
</Link>
</Table> */}