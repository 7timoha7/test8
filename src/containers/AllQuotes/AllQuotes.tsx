import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {QuoteType} from "../../types";
import CardQuote from "../../components/CardQuote/CardQuote";
import {useParams} from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import "./AllQuotes.css";

const AllQuotes = () => {
  const [list, setList] = useState<QuoteType[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const {id} = useParams();

  const fetchQuotes = useCallback(async () => {
    setLoader(true);
    if (id !== undefined) {
      try {
        const quotesResponseCategory = await axiosApi.get('/quotes.json?orderBy="category"&equalTo="' + id + '"');
        if (quotesResponseCategory.data !== null) {
          const quotCategory = Object.keys(quotesResponseCategory.data).map(key => {
            const quote = quotesResponseCategory.data[key];
            quote.id = key;
            return quote;
          });
          setList(quotCategory);
        }
      } finally {
        setLoader(false);
      }
    } else {
      try {
        const quotesResponse = await axiosApi.get("/quotes.json");
        if (quotesResponse.data !== null) {
          const quotes = Object.keys(quotesResponse.data).map(key => {
            const quote = quotesResponse.data[key];
            quote.id = key;
            return quote;
          });
          setList(quotes);
        }
      } finally {
        setLoader(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);

  const btnDelete = async (id: string) => {
    try {
      await axiosApi.delete("/quotes/" + id + ".json");
    } catch (e) {
      console.error('error', e);
    }
    await fetchQuotes().catch(console.error);
  }

  let content = (
    <div>
      {list.map(item => {
        return <CardQuote deleteItem={() => btnDelete(item.id)} quotes={item} key={item.id}/>
      })}
    </div>
  );

  if (loader) {
    content = <Preloader/>
  }

  const noContent = ()=>{
    if(list.length) {
      return content;
    } else {
      return <h1>No Quotes</h1>
    }
  }

  return (
    <div className="allQuotes">
      {noContent()}
    </div>
  );
};

export default AllQuotes;

