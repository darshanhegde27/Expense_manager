import React from 'react';
import './style.css';
import store from './Redux/Store/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
