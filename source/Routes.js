import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import initStore, { history } from './ducks/store';
import SagasManager from './ducks/helpers/sagasManager';

const store = initStore({});
store.runSaga(SagasManager.getRootSaga());

export const Routes = () => (<Provider store={ store }>
  <ConnectedRouter history={ history }>
    <Switch>
      <Route exact path='/' component={ MainPage } />
      <Route path='*' component={ NotFound } />
    </Switch>
  </ConnectedRouter>
</Provider>);
