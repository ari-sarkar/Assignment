import "./Card.css";
import BTC from "../assests/BTC.png";
interface CardDataProps {
  cardData: CardDataType;
}
type CardDataType = {
  logo: string;
  no: number;
  name: string;
  price: string;
  price_stat: string;
  tvl: string;
  popular_pairs: any;
};

const Card: React.FC<CardDataProps> = ({ cardData }) => {
  return (
    <div key={cardData.no} className="Card flex flex-col items-center">
      <div className="logo_wrapper flex justify-center">
        <div
          className={`logo_bg flex justify-center items-center logo_bg_${cardData.logo}`}
        >
          <img src={`${cardData.logo}.png`} alt="logo"></img>
        </div>
      </div>
      <div className="name text-center leading-7 text-xs opacity-90">
        <p>{cardData.name}</p>
      </div>
      <div className="input_wrapper mt-2 flex justify-center items-center relative">
        <p className="text-base opacity: 0.9">{cardData.price}</p>
        <span
          className={
            "text-xs opacity-90 absolute " +
            (cardData.price_stat.includes("+") ? "green " : "red ") +
            (cardData.price.length > 10 ? "right-2" : "right-4")
          }
        >
          {cardData.price_stat}
        </span>
      </div>
      <p className="desc_text text-xs leading-8 opacity-90">Price</p>
      <div className="input_wrapper mt-2 flex justify-center items-center relative">
        <p>{cardData.tvl}</p>
      </div>
      <p className="desc_text text-xs leading-8 opacity-90">TVL</p>

      <div className="popular_wrapper mt-3 flex justify-around items-center">
        {cardData.popular_pairs.map((each: string, i: number) => (
          <img className="" key={i} src={each} alt="logo"></img>
        ))}
      </div>
      <p className="desc_text text-xs leading-8 opacity-90">Popular pairs</p>
    </div>
  );
};

export default Card;
