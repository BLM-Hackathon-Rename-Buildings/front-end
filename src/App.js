import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import AddSymbol from "./components/addSymbol/AddSymbol";
import Explore from "./components/explore/Explore";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { fetchAllSymbols } from './reducers/SymbolsReducer';

class InitialApp extends Component {
  componentDidMount() {
    this.props.fetchAllSymbols();
  }
  render() {
    console.log('symbols test data', this.props.symbols);
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
}
const mapState = (state) => ({
  symbols: state.symbols,
});

const mapDispatch = (dipatch) => ({
  fetchAllSymbols: () => dipatch(fetchAllSymbols()),
});

const App = connect(mapState, mapDispatch)(InitialApp);
export default App;
