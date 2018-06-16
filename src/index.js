import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


registerServiceWorker();
