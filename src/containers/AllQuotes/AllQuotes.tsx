import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {QuoteType} from "../../types";
import CardQuote from "../../components/CardQuote/CardQuote";
import "./AllQuotes.css";
import {useParams} from "react-router-dom";

const AllQuotes = () => {
  const [list, setList] = useState<QuoteType[]>([]);
  const {id} = useParams();

  const fetchQuotes = useCallback(async () => {
    if (id !== undefined) {
      const quotesResponseCategory = await axiosApi.get('/quotes.json?orderBy="category"&equalTo="' + id + '"');
      const quotCategory = Object.keys(quotesResponseCategory.data).map(key => {
        const quote = quotesResponseCategory.data[key];
        quote.id = key;
        return quote
      });
      setList(quotCategory)
    } else {
      const quotesResponse = await axiosApi.get("/quotes.json");
      const quotes = Object.keys(quotesResponse.data).map(key => {
        const quote = quotesResponse.data[key];
        quote.id = key;
        return quote
      });
      setList(quotes);
    }
  }, [id]);

  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);
  return (
    <div className="allQuotes">
      {list.map(item => {
        return <CardQuote quotes={item} key={item.id}/>
      })}
    </div>
  );
};

export default AllQuotes;