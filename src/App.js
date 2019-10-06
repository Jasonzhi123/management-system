import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Router from './router/router';

import Login from '@pages/login';
import Common from '@pages/layout/common';
import OrderDetail from '@pages/order/detail';
import '@style/common.less';

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
      </div>
    );
  }
}

export default App;
