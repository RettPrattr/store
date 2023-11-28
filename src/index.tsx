import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app/App';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();


console.log(store.getState())
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Provider store={store}>
    <BrowserRouter>        
      <App state={store.getState()}
           dispatch={store.dispatch}
      />
    </BrowserRouter>
  </Provider>

);


