import React, { Component } from 'react';

export class Search extends Component {
	// Component level state
	state = {
		text: ''
	};
	onChange = (e) => {
		// use [e.target.name] can allow you to share the onchange with different input fields
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.text);
	};

	render() {
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
			</div>
		);
	}
}

export default Search;
