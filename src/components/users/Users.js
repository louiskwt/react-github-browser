import React from 'react'
import UserItem from '../users/UserItem'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = ({users, loading}) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {/* Loop through the user data to create a list ( ) */}
                {users.map(user => (
                    <UserItem key={user.id} userData={user} />
                ) )}
                    
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
