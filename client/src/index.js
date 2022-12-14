import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import PizzaStore from './store/pizzaStore';
export const Context = createContext(null) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Context.Provider value={{
    pizza: new PizzaStore(),
}}>
    <App />
</Context.Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

