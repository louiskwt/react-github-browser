import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // Lifecycle method: it fires on load
  async componentDidMount() {

    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, loading: false});
      
  }
  // Lifecycle method
	render() {
		return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
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
	}
}

export default App;
