import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
