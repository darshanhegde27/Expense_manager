import React from 'react';
import './style.css';
import Home from './Views/components/Home';
import login from './Views/components/login';

export default [
  {
    name: 'Home',
    route: '/',
    component: Home
  },
  {
    name: 'Login',
    route: '/login',
    component: login
  },
];
