import React, {MouseEventHandler} from 'react';
import {QuoteType} from "../../types";
import {Link} from "react-router-dom";
import "./CardQuote.css";

interface Props {
  quotes: QuoteType;
  deleteItem: MouseEventHandler;
}

const CardQuote: React.FC<Props> = ({quotes, deleteItem}) => {

    return (
      <div className="cardBox">
        <div className="textQuote">
          <p>{quotes.text}</p>
        </div>
        <p><span>Author: </span>{quotes.author}</p>
        <div>
          <button className="btnDelete" onClick={deleteItem}>Delete</button>
          <Link className="btnEdit" to={"/edit/" + quotes.id}>Edit</Link>
        </div>
      </div>
    );
  }
;

export default CardQuote;