import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
	// Settinng all the states with useState

	// Search Github users: receiving the props being passed up from users

	// Get users repos

	// Lifecycle method
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home}></Route>
								<Route
									exact
									path='/about'
									component={About}
								></Route>
								<Route
									exact
									path='/user/:login'
									component={User}
								></Route>
								<Route component={NotFound}></Route>
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);

	// JSX and expression

	//   // JSX are rendered here (underneath is JS)
	//   <div className='App'>
	//   {/* must be wrapped with one parent element */}
	//   {loading ? <h4>Loading...</h4> : 		    <h1>Hello {showName && name}</h1>
	//   }
	// </div>

	// Pure JS way
	// return React.createElement(
	// 	'div',
	// 	{ className: 'App' },
	// 	React.createElement('h1', null, 'Hello From React')
	// );
};

export default App;
