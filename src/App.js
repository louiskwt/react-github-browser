import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
	// Settinng all the states with useState
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	// Search Github users: receiving the props being passed up from users

	// need to declare them probably with const
	const searchUsers = async (text) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUsers(res.data.items);
		setLoading(false);
	};
	// Get a single user
	const getUser = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setUser(res.data);
		setLoading(false);
	};

	// Get users repos
	const getUserRepos = async (username) => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setRepos(res.data);
		setLoading(false);
	};

	// clear users from state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	// Set Alert
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 5000);
	};

	// Lifecycle method
	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route exact path='/'>
								<Fragment>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={
											users.length > 0 ? true : false
										}
										setAlert={showAlert}
									/>
									<Users loading={loading} users={users} />
								</Fragment>
							</Route>
							<Route exact path='/about'>
								<About />
							</Route>
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<User
										{...props}
										getUser={getUser}
										getUserRepos={getUserRepos}
										user={user}
										repos={repos}
										loading={loading}
									/>
								)}
							></Route>
						</Switch>
					</div>
				</div>
			</Router>
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
