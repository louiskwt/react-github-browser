import React, { Component } from 'react'
import UserItem from '../users/UserItem'

export class Users extends Component {
    state = {
        users: [
            {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
                "html_url": "https://github.com/mojombo"
            },
            {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
                "html_url": "https://github.com/defunkt"
            },
            {
                "login": "pjhyett",
                "id": 3,
                "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
                "html_url": "https://github.com/pjhyett"
            }


        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {/* Loop through the user data to create a list ( ) */}
                {this.state.users.map(user => (
                    <UserItem key={user.id} userData={user} />
                ) )}
                
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
