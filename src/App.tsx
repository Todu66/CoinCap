// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkl
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {

  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkl';


  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  
  return (
    <div className="container">
        <h1>{}</h1>
        <h1></h1>
    </div>
  )
}

export default App