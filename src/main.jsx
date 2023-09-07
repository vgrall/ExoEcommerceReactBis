import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importez le composant Provider
import App from './App';
import './index.css';
import { createStore } from 'redux';
import productReducer from './reducers/productReducer';

const store = createStore(productReducer); // Créez le store Redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);