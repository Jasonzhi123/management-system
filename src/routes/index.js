import React from 'react';
import { Redirect } from 'react-router-dom';
import RouteComponents from "./components";

const routes = [
  {
    path: "/login",
    requiredAuth: false,
    component: RouteComponents.Login
  },
  {
    render: (props) => {
      const token = localStorage.getItem('token');
      if (!token) {
        return <Redirect to="/login" />;
      }

      return <RouteComponents.Layout {...props} />;
    },
    requiredAuth: true,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />
      },
      {
        path: '/home',
        requiredAuth: true,
        component: RouteComponents.Home
      },

      {
        path: '*',
        render: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '*',
    component: RouteComponents.NotFound
  }
]

export default routes;