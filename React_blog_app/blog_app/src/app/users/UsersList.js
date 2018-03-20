import React from 'react';
import UserListItem from './UserListItem';

const UsersList = props => {
    return (
        <div className="users-list">
        {props.users.map(((user, i) => {
            return (<UserListItem obj = {user} key = {i} />)
        }))}
        </div>
    )
}

export default UsersList;