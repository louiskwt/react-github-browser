import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	// Component level state
	state = {
		text: ''
	};
	// making the code more robust
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
	};

	onChange = (e) => {
		// use [e.target.name] can allow you to share the onchange with different input fields
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		// Passing the props up
		this.props.searchUsers(this.state.text);
		// Clear the input field state
		this.setState({ text: '' });
	};

	render() {
		const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						id=''
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				{showClear && (
					<button
						className='btn btn-light btn-block'
						onClick={clearUsers}
					>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;
