import React from 'react';
import ReactDOM from '../../amzon/package.json';
import './index.css';
import App from './App';
import reportWebVitals from '../src/reportWebVitals';
import reducer, { initialState } from '../src/reducer';
import { StateProvider } from '../src/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

