import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'


import App from './components/App';
import reducer from './reducers';

//fordevtools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store} >
        <App  />
    </Provider>
    ,
    document.querySelector("#root")
)