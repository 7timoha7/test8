import React, {useCallback, useEffect, useState} from 'react';
import {QuoteType} from "../../types";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import "./FormQuote.css";
import Preloader from "../Preloader/Preloader";

const FormQuote = () => {
  const [quoteData, setQuoteData] = useState<QuoteType>({
    id: '',
    author: '',
    text: '',
    category: '',
  });

  const [loader, setLoader] = useState<boolean>(false);

  const {id} = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(()=> {
    setQuoteData(prev => ({...prev , text:'', category: '', author: '', id: ''}))
  }, [location]);

  const fetch = useCallback(async () => {
    if (id) {
      setLoader(true);
      try {
        const response = await axiosApi.get("quotes/" + id + ".json");
        const quote = response.data
        setQuoteData(quote);
      } finally {
        setLoader(false);
      }
    }
  }, [id]);

  useEffect(() => {
    fetch().catch(console.error);
  }, [fetch]);

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement> |
      React.ChangeEvent<HTMLInputElement> |
      React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const {name, value} = e.target;
    setQuoteData(prev => ({...prev, [name]: value}));
  }

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      try {
        await axiosApi.put("quotes/" + id + ".json", quoteData);
      } catch (e) {
        console.error('error', e);
      }
    } else {
      try {
        await axiosApi.post("/quotes.json", quoteData);
      } catch (e) {
        console.error('error', e);
      }
    }
    navigate("/");
  }

  let content = (
    <form onSubmit={formSubmit} className="form">
      <div>
        <select className="select" required value={quoteData.category} onChange={onChange} name="category"
                id="select">
          <option value=''>select?</option>
          <option value="star-wars">Star Wars</option>
          <option value="famous-people">Famous people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivational">Motivational</option>
        </select>
      </div>
      <div>
        <div>
          <label htmlFor="author">Author</label>
        </div>
        <input className="author" required value={quoteData.author} name="author" onChange={onChange}
               type="text"/>
      </div>
      <div>
        <div>
          <label htmlFor="text">text</label>
        </div>
        <textarea className="text" required value={quoteData.text} name="text" onChange={onChange}/>
      </div>
      <div>
        <button type={"submit"}>Save</button>
      </div>
    </form>
  );

  if (loader) {
    content = <Preloader/>
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default FormQuote;