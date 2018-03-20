import React from 'react';

const UserListItem = props => {
    return (
        <div>
            <img src={props.obj.image} alt="user_img"/>
            <p>{props.obj.name}</p>
            <p>{props.obj.email}</p>
            <p>{props.obj.dob}</p>
        </div>
    )
}

export default UserListItem;