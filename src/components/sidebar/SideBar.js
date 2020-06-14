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
          <div className="symbol-info-field">
            {' '}
            <b>Name:</b> {this.props.match.params.id}{' '}
          </div>
          <div className="symbol-info-field">
            {' '}
            <b>Type: </b>
            {this.props.monumentType}{' '}
          </div>
          <div className="symbol-info-field">
            {' '}
            <b>Info:</b>
            This is dummy data. Not sure what we are going to put here but for
            now this is just gibberish. I wonder how many lines this will have
            on here. 'This is dummy data. Not sure what we are going to put here
            but for now this is just gibberish. I wonder how many lines this
            will have on here. 'This is dummy data. Not sure what we are going
            to put here but for now this is just gibberish. I wonder how many
            lines this will have on here.
          </div>
          <div className="center-button">
            <button className="remove-button">How to Get Statue Removed</button>
          </div>
        </div>
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
