import React from 'react';
import './Detail.css';
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
      showActions: false,
    };

    this.remove = this.remove.bind(this);
    this.close = this.close.bind(this);
  }
  componentDidMount() {
    this.props.fetchSymbol(this.props.match.params.id);
  }
  remove() {
    this.setState(state => ({
      showActions: true
    }));
  }

  close() {
    this.setState(state => ({
      showActions: false
    }));
  }

  render() {
    return (
      <div className="detail">
        <aside className="side-bar">
          <img
            src={
              this.props.symbol.url
                ? this.props.symbol.url
                : 'https://media.washtimes.com/media/image/2018/08/08/8_8_2018_ap-172595843326498201.jpg'
            }
            alt="symbol"
            className="symbol-image"
          />
          <div className="symbol-info">
            <h2 className="symbol-title-field">{this.props.symbol.name}</h2>
            <p className="symbol-info-field">
              {' '}
              Lorem oo ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </p>
          </div>

          {this.state.showActions ? null : (
            <button className="remove-button" onClick={this.remove}>
              REMOVE
            </button>
          )}
        </aside>

        <div>
          {!this.state.showActions ? null : (
            <div className="action-takeover">
              <article className="action-text">
                <button className="close-button" onClick={this.close}>
                  <img className="close-icon" src={require("../../assets/Cross.svg")}/>
                </button>
                <h1 className="action-header"> TAKE ACTION. </h1>
                <h2>Petitions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h2>Contact Local Officials</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </article>
            </div>
          )}
        </div>
      </div>
    );
  }
}

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
