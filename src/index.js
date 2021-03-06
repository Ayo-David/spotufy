import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { DataLayer } from './context/DataLayer';
import reportWebVitals from './reportWebVitals';
import { initialState, reducerFunction } from './context/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducerFunction}>

      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
