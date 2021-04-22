import React, { Component } from 'react';

export class User extends Component {
	// Fire off the getUser function in (App.js) to get a single user and then it will be passed into the User componene
	componentDidMount() {
		// Matching the param in specified in the path in route
		this.props.getUser(this.props.match.params.login);
	}
	render() {
		const {
			name,
			avatat_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		const { loading } = this.props;

		return <div>{name}</div>;
	}
}

export default User;
