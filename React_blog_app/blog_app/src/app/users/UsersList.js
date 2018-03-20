import React from 'react';
import UserListItem from './UserListItem';
import UserCardItem from './UserCardItem';

const UsersList = props => {
    return (
        <div className={props.classes}>
        {props.users.map(((user, i) => {
            return (<UserCardItem obj = {user} key = {i} />)
        }))}
        </div>
    )
}

export default UsersList;