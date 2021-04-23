import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
	// Fire off the getUser function in (App.js) to get a single user and then it will be passed into the User componene
	componentDidMount() {
		// Matching the param in specified in the path in route
		this.props.getUser(this.props.match.params.login);
	}
	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired
	};
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			company,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		const { loading } = this.props;

		if (loading) return <Spinner />;

		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back to Search
				</Link>
				{/* { } set a placeholder for the i tag */}
				Hireable:{' '}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-time-circle text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							alt=''
							className='round-img'
							style={{ width: '150px' }}
						/>
						<h1>{name}</h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3> <p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong> {login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company: </strong> {company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Blog: </strong> {blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>
						Followers: {followers}
					</div>
					<div className='badge badge-success'>
						Following: {following}
					</div>
					<div className='badge badge-light'>
						Public Repos: {public_repos}
					</div>
					<div className='badge badge-dark'>
						Public Gist: {public_gists}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default User;