import React from 'react';
import './style.css';
import store from "./Redux/Store/store"
import { Provider } from 'react-redux';
import Home from "./Views/components/Home";
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
