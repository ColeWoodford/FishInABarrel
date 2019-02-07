import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './view/pages/landing/landing';
import Lake from './view/pages/lake/lake';
import Admin from './view/pages/admin/admin';
import Header from './view/pages/admin/header';
import './app.css';

class App extends Component {

  render() {
    const { username } = this.props;
    let header;
    if (username !== "cole") {
      header=
      <div></div>
    } else {
      header=
      <div>
        <Header />
      </div>
    }
    return (
      <div>
        <BrowserRouter>
          <div>
            {header}
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Landing} />
            <Route
              path="/lake"
              render={(props) => <Lake socket={this.props.socket} />}
            />
            <Route path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
      username: state.LoginReducer.username,
  };
}

export default connect(mapStateToProps)(App);
