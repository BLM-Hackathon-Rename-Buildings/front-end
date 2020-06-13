import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import AddSymbol from "./components/addSymbol/AddSymbol";
import Explore from "./components/explore/Explore";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <div className="App">
      <Header />

      <Route path="/" exact component={Home}></Route>
      <Route
        path="/map"
        exact
        render={(routerProps) =>
          <Explore />}
      ></Route>
      <Route path="/add" exact component={AddSymbol}></Route>

      <Footer />
    </div>
  );
}

export default App;
