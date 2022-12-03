import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import CategoryList from "./components/CategoryList/CategoryList";
import {Route, Routes} from "react-router-dom";
import AllQuotes from "./containers/AllQuotes/AllQuotes";
import "./App.css";
import AddOrEdit from "./containers/AddOrEdit/AddOrEdit";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="mainBox">
        <CategoryList/>
        <Routes>
          <Route path={"/"} element={(
            <AllQuotes/>
          )}/>
          <Route path={'/quotes/:id'} element={(
            <AllQuotes/>
          )}/>
          <Route path="/add" element={(
            <AddOrEdit/>
          )}/>
          <Route path="edit/:id" element={(
            <AddOrEdit/>
          )}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;
