import { Link } from 'react-router-dom';

export interface CoinProps {
  id: string;
  name: string;
  image: string;
  symbol: string;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  current_price: number;
}

interface CoinListProps {
  coins: CoinProps[];
}

const formatPercentage = (percentage: number) => {
  return percentage.toFixed(3);
}

const formatLargeNumber = (number: number) => {
  return number.toLocaleString();
};

export const CoinList = ({ coins }: CoinListProps) =>{
  console.log('CoinList received coins:', coins);
  return (
    <div className="flex flex-col gap-2 p-2 cursor-pointer">
      {coins.map((coin) => (
        <Link to={`/coins/${coin.id}`} key={coin.id}>
          
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-8 h-8"
              src={coin.image}
              alt={`${coin.name} logo`}
            />
            <h2>{coin.name}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p>Symbol: {coin.symbol}</p>
            <p>Market Cap: ${formatLargeNumber(coin.market_cap)}</p>
            <p>Current Price: {coin.current_price}$</p>
            <p>Volume: ${formatLargeNumber(coin.total_volume)}</p>
            <p>24h Change: {formatPercentage(coin.price_change_percentage_24h)}%</p>
          </div>
          <hr />
        </Link>
      ))}
    </div>
  );
};

export default CoinList;
