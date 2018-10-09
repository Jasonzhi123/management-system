import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
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
import OrderDetail from './pages/order/detail'

export default class IRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <App>
            <Route path="/login" component={Login} />
            <Route path="/admin" render={() =>
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Bottons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/loadings" component={Loadings}></Route>
                  <Route path="/admin/ui/messages" component={Messages}></Route>
                  <Route path="/admin/ui/notice" component={Notice}></Route>
                  <Route path="/admin/ui/gallery" component={Gallery}></Route>
                  <Route path="/admin/ui/carousel" component={Carousel}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route path="/admin/form/login" component={FormLogin}></Route>
                  <Route path="/admin/form/reg" component={Register}></Route>
                  <Route path="/admin/table/basic" component={BasicTable}></Route>
                  <Route path="/admin/table/high" component={HighTable}></Route>
                  <Route path="/admin/rich" component={Rich}></Route>
                  <Route path="/admin/city" component={City}></Route>
                  <Route path="/admin/order" component={Order}></Route>
                  <Route component={NoMatch} /> 
                </Switch>
              </Admin>
            } />
            <Route path="/common" render={()=>
              <Common>
                <Route path="/common/order/detail:orderId" component={OrderDetail}/>
              </Common>  
            } />
          </App>
        </HashRouter>
      </div>
    )
  }
}
