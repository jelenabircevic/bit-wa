import React from 'react';
import UserListItem from './UserListItem';
import UserCardItem from './UserCardItem';

const renderListOrCards = (props) => {
    if (props.grid) {
        return (
            props.users.map(user => <UserCardItem obj={user} key={user.id}/>)
        )
    }
    return (
        props.users.map(user => <UserListItem obj={user} key={user.id}/>)
    )
}

const UsersList = props => <div className="row container"> {renderListOrCards(props)} </div>

export default UsersList;