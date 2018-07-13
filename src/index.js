import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import redurce from './redux/redurce'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(redurce)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
