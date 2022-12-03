import React, {MouseEventHandler} from 'react';
import {QuoteType} from "../../types";
import "./CardQuote.css";
import {Link} from "react-router-dom";

interface Props {
  quotes: QuoteType;
  deleteItem: MouseEventHandler;
}

const CardQuote: React.FC<Props> = ({quotes, deleteItem}) => {

    return (
      <div className="cardBox">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        <p>{quotes.category}</p>
        <div>
          <button onClick={deleteItem}>Delete</button>
          <Link to={"/edit/" + quotes.id}>Edit</Link>
        </div>
      </div>
    );
  }
;

export default CardQuote;