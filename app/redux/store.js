import {createStore, compose, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(promiseMiddleware), ...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
};