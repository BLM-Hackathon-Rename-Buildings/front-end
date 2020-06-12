import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import AddBuilding from "./components/addBuilding/AddBuilding";
import Map from "./components/map/Map";
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
        render={(routerProps) => <Map city="Washington, DC" />}
      ></Route>
      <Route path="/add" exact component={AddBuilding}></Route>
      {/* <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. }
        <Switch>
          <Route path="/add">
            <AddBuilding />
          </Route>
          <Route path="/map">
            <Map city="Washington, DC" />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router> */}

      <Footer />
    </div>
  );
}

export default App;
