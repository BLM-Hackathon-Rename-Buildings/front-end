import React from 'react';
import './SideBar.css';
import { fetchSymbol } from '../../reducers/OneSymbolReducer';
import { connect } from 'react-redux';

class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monumentName: '',
      monumentPhoto:
        'https://media.washtimes.com/media/image/2018/08/08/8_8_2018_ap-172595843326498201.jpg',
      monumentType: '',
    };
  }
  componentDidMount() {
    this.props.fetchSymbol(this.props.match.params.id);
  }

  render() {
    console.log('symbol:', this.props.symbol);
    return (
      <aside className="side-bar">
        {this.state.monumentName}
        <img
          src={this.state.monumentPhoto}
          alt="symbol"
          className="symbol-image"
        />
        <div className="symbol-info">
          <h2 className="symbol-title-field">{this.props.match.params.id}</h2>
          <p className="symbol-info-field">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <button className="remove-button">REMOVE</button>
      </aside>
    );
  }
}

//needs an "add to cart" button
function mapStateToProps(state) {
  return {
    symbol: state.symbol,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchSymbol: (id) => dispatch(fetchSymbol(id)),
  };
}

const SideBar = connect(mapStateToProps, mapDispatchToProps)(SideBarComponent);
export default SideBar;
//@carly to do: move this attribution somewhere else
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
