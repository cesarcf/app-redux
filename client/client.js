import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const render = (Component) => {
	ReactDOM.render(
			<AppContainer>
					<Component />
			</AppContainer>
		,
		document.getElementById('root')
	);
}

render(App);

// HMR (Hot Module Replacement)
if (module.hot) {
	//console.log('hot reloading active');
	module.hot.accept('./components/App', () => {
		//console.log('...doing hot reload...');
		const NextApp = require('./components/App').default;
		//Volvemos a hacer render:
		render(NextApp);
	});
}