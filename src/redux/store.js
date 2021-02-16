import {createStore} from 'redux';
import dataDumpsReducer from './reducers'

export const store = createStore(dataDumpsReducer);