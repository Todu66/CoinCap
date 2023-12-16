import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinInfo = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinInfo = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        setCoinInfo(response.data);
      } catch (error) {
        console.error(error);
        setError("Error fetching coin data. Please try again later.");
      }
    };

    fetchCoinInfo();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!coinInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{coinInfo.name}</h1>
      <p>Symbol: {coinInfo.symbol}</p>
      <p>Market Cap: ${coinInfo.market_data?.marketcap?.usd || "N/A"}</p>
      <p>Current Price: ${coinInfo.market_data?.current_price?.usd || "N/A"}</p>
      <p>24h Low: ${coinInfo.market_data?.low_24h?.usd || "N/A"}</p>
      <p>24h High: ${coinInfo.market_data?.high_24h?.usd || "N/A"}</p>
      <p>Circulating Supply: {coinInfo.market_data?.circulating_supply || "N/A"}</p>
      <p>1h Change: {coinInfo.market_data?.price_change_percentage_1h_in_currency?.usd || "N/A"}%</p>
      <p>24h Change: {coinInfo.market_data?.price_change_percentage_24h_in_currency?.usd || "N/A"}%</p>
      <p>7d Change: {coinInfo.market_data?.price_change_percentage_7d_in_currency?.usd || "N/A"}%</p>
      <p>14d Change: {coinInfo.market_data?.price_change_percentage_14d_in_currency?.usd || "N/A"}%</p>
      <p>30d Change: {coinInfo.market_data?.price_change_percentage_30d_in_currency?.usd || "N/A"}%</p>
      <p>1y Change: {coinInfo.market_data?.price_change_percentage_1y_in_currency?.usd || "N/A"}%</p>

      <div>
        <h2>About</h2>
        <p>{coinInfo.description?.en || "Description not available."}</p>
      </div>
    </div>
  );
};

export default CoinInfo;
