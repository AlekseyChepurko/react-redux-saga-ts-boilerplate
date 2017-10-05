import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Routes } from './Routes';
import './env';
import './app.css';


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    ,
    document.getElementById('root')
  );
};

render(Routes);
if (module.hot) {
  module.hot.accept('./Routes', () => { render(Routes); });
}
