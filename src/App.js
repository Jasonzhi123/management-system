import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Common from './common';

import Login from './pages/login';
import Router from './router/router';
import OrderDetail from './pages/order/detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
              </Common>
            } />
            <Router></Router>
          </Switch>
        </BrowserRouter >

        {/* {this.props.children} */}
      </div>
    );
  }
}

export default App;
