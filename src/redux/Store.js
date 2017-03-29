import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import CounterReduce from './CounterReduce';
import thunk from 'redux-thunk';
import DevTool from '../containers/DevTool';


//store
let date = [{
    id: 1,
    show: true,
    img: 'init'
}, {
    id: 2,
    show: true,
    img: 'init'
}, {
    id: 3,
    show: true,
    img: 'init'
}, {
    id: 4,
    show: true,
    img: 'init'
}, {
    id: 5,
    show: true,
    img: 'init'
}, {
    id: 6,
    show: true,
    img: 'init'
}, {
    id: 7,
    show: true,
    img: 'init'
}, {
    id: 8,
    show: true,
    img: 'init'
}, {
    id: 9,
    show: true,
    img: 'init'
}];

let enhancer = compose(applyMiddleware( thunk));
let store = createStore(CounterReduce, date, enhancer);

export default store;