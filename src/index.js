import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CounterIndex } from './features/counter/CounterIndex';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

// ReactDOM.hydrate(<App />, document.getElementById('root'));

// ReactDOM.hydrate(<CounterIndex />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// const container = document.getElementById('root');
// const root = hydrate(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <CounterIndex />
//     </Provider>
//   </React.StrictMode>
// );

ReactDOM.hydrate( <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

serviceWorker.unregister();