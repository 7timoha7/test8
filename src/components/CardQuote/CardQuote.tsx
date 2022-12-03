import React from 'react';
import {QuoteType} from "../../types";
import "./CardQuote.css";

interface Props {
  quotes: QuoteType;
}

const CardQuote:React.FC<Props> = ({quotes}) => {


  return (
    <div className="cardBox">
      <p>{quotes.text}</p>
      <p>{quotes.author}</p>
      <p>{quotes.category}</p>
    </div>
  );
};

export default CardQuote;