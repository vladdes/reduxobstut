import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const ReduxPromise = require('redux-promise').default;

import registerServiceWorker from './registerServiceWorker';
import PostList from './components/containers/PostList';
// import NewPost from './components/newPost/NewPost';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   <Switch>
    <Route path="/" exact component={ PostList }/>
    {/* <Route path="/Post" component={ NewPost }/> */}
   </Switch>
   </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
