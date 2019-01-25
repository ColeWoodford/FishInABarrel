import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { BackgroundWrapper } from './components/styledComponents/app-sc';
import Landing from './view/pages/landing';
import Lake from './view/pages/lake';
import Admin from './view/pages/admin/admin';
import Header from './view/header';
import './app.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
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

export default App;
