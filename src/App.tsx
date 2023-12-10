import { useState, useEffect } from "react";
import axios from "axios";
import CoinList,{CoinProps} from "./components/CoinList";


function App() {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  
  //const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkl';

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets";

    axios
      .get(url, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        // Shuffle the response array to get a random selection of 10 coins
        const shuffledCoins = response.data
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);
          
        // Set the state with the randomly selected coins data
        setCoins(shuffledCoins);
      })
      .catch((error) => {
        console.log(error);
        // Log any errors that occur during api request
      });
  }, []);

  return (
    <div className="container flex flex-col ">
      <div className="flex justify-center text-xl">
        <h1 className="cursor-pointer">CoinGecko</h1>
      </div>
      {/* ---------- */}
      <CoinList coins={coins}/>
    </div>
  );
}

export default App;
