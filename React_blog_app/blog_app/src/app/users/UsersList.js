import React from 'react';
import UserListItem from './UserListItem';

//props.users is a Promise

/*
props.users.then((list) => {
    list.map((user, i) => {
        <UserListItem obj = {user} key = {i} />
    })
})
*/

const UsersList = props => {
    return (
        <div className="users-list">
            <UserListItem obj = {{name: "ne radi", email:"applikacija", dob:"treba mi data", image:"http://www.punjabigraphics.com/images/15/star-wars-fail.jpg"}} />
        </div>
    )
}

export default UsersList;