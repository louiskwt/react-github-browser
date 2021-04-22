import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//  receiving the props being passed down from Users.js
const UserItem = ({ userData: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<div>
				<Link
					to={`/user/${login}`}
					className='btn btn-dark btn-sm my-1'
				>
					View
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	userData: PropTypes.object.isRequired
};

export default UserItem;
