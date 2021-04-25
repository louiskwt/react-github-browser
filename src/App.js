import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
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
								<Route exact path='/'>
									<Fragment>
										<Search />
										<Users />
									</Fragment>
								</Route>
								<Route exact path='/about'>
									<About />
								</Route>
								<Route
									exact
									path='/user/:login'
									component={User}
								></Route>
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
