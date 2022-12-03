import React from 'react';
import FormQuote from "../../components/FormQuote/FormQuote";
import {useParams} from "react-router-dom";
import "./AddOrEdit.css";

const AddOrEdit = () => {

  const {id} = useParams();

  const AddOfEdit = () => {
    if (id) {
      return <h2>Edit Quote</h2>
    } else {
      return <h2>Add Quote</h2>
    }
  }

  return (
    <div className="add">
      <div>
        {AddOfEdit()}
      </div>
      <FormQuote/>
    </div>
  );
};

export default AddOrEdit;