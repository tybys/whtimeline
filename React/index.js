import React, {Component} from 'react';
import {render} from 'react-dom';

import App from './App';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

//module.hot.accept();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();