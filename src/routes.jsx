import React from 'react';
import './style.css';
import Home from './Views/components/Home';
import login from './Views/components/login';
import Register from './Views/components/Register';

export default [
  {
    name: 'Home',
    route: '/',
    component: Home
  },
  {
    name: 'Login',
    route: '/Login',
    component: login
  },
  {
    name:'Register',
    route:'/Register',
    component:Register
  },
];
