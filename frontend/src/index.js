import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StreamersContextProvider } from './contexts/StreamersContext';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StreamersContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </StreamersContextProvider>
  </React.StrictMode>
);
