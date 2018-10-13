import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';
import Admin from './admin';
import Bottons from './pages/ui/bottons';
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Messages from "./pages/ui/messages";
import Notice from "./pages/ui/notice";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import NoMatch from './pages/nomatch';
import FormLogin from './pages/form/login';
import Register from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import Rich from './pages/rich';
import City from './pages/city';
import Order from './pages/order';
import Common from './common';
import OrderDetail from './pages/order/detail';
import User from './pages/user';
import Bar from './pages/charts/bar/index'
import Pie from './pages/charts/pie/index'
import Line from './pages/charts/line/index';
import Permission from './pages/permission';
import BikeMap from './pages/map/bikeMap';

export default class IRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/common" render={() =>
                <Common>
                  <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                </Common>
              } />
              
              <Route path="/" render={() =>
                <Admin>
                  <Switch>
                  <Route path="/home" component={Home}></Route>
                    <Route path="/ui/buttons" component={Bottons}></Route>
                    <Route path="/ui/modals" component={Modals}></Route>
                    <Route path="/ui/loadings" component={Loadings}></Route>
                    <Route path="/ui/messages" component={Messages}></Route>
                    <Route path="/ui/notice" component={Notice}></Route>
                    <Route path="/ui/gallery" component={Gallery}></Route>
                    <Route path="/ui/carousel" component={Carousel}></Route>
                    <Route path="/ui/tabs" component={Tabs}></Route>
                    <Route path="/form/login" component={FormLogin}></Route>
                    <Route path="/form/reg" component={Register}></Route>
                    <Route path="/table/basic" component={BasicTable}></Route>
                    <Route path="/table/high" component={HighTable}></Route>
                    <Route path="/rich" component={Rich}></Route>
                    <Route path="/city" component={City}></Route>
                    <Route path="/order" component={Order}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/charts/bar" component={Bar}></Route>
                    <Route path="/charts/pie" component={Pie}></Route>
                    <Route path="/charts/line" component={Line}></Route>
                    <Route path="/permission" component={Permission}></Route>
                    <Route path="/map/bikeMap" component={BikeMap}></Route>
                    <Route component={NoMatch} />
                  </Switch>
                </Admin>
              } />
            </Switch>
          </App>
        </HashRouter>
      </div>
    )
  }
}
