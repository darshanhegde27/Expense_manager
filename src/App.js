import React from 'react';
import './style.css';
import store from "./Redux/Store/store"
import { Provider } from 'react-redux';

//import Home from './Views/components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Rou from "./routes.jsx"

export default function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
           <Routes>
             {Rou.map((value,index)=>
             {
               return(<>
               <Route  path={value.route} element={<value.component/>} exact/>
               </>)
             })}
           </Routes>
     </BrowserRouter>
    </Provider>
  );
}
