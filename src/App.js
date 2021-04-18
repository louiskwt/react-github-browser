import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem';
import './App.css';


class App extends Component {
	render() {
		return (
      <div className="App">
        <Navbar />
        <UserItem />
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
