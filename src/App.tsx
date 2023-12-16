import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import CoinList, { CoinProps } from "./components/CoinList";
import CoinInfo from "./components/CoinInfo";

function App() {
  const [coins, setCoins] = useState<CoinProps[]>([]);

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
        console.log("API Response:", response.data);
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
    console.log("Coins data:", coins);
  }, []);

  return (
    <div className="container flex flex-col">
      <Link to="/">
        <h1 className="text-4xl font-bold text-center">CoinGecko</h1>
      </Link>
      <Routes>
        <Route path="/" element={<CoinList coins={coins} />} />
        <Route path="/coin/:id" element={<CoinInfo />} />
      </Routes>
    </div>
  );
}

export default App;
