export interface CoinProps {
  coins: CoinProps[];
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
  // to get 24 hour change percentage but with 3 numbers after the decimal point
  return percentage.toFixed(3);
}
const formatLargeNumber = (number : number) => {
  // Convert the number to a string with commas
  return number.toLocaleString();
};

export const CoinList = ({ coins }: CoinListProps) => {
  return (
    <div className="flex flex-col gap-2 p-2 cursor-pointer">
      {coins.map((coin) => (
        <div key={coin.id}>
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
        </div>
      ))}
    </div>
  );
};
export default CoinList;
