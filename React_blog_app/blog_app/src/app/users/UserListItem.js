import React from 'react';

const UserListItem = props => {
    return (
        <div className="card horizontal">
            <div className="card-image">
                <img src={props.obj.image} alt="user_img"/>
                </div>
            <div className="card-stacked left">
                <div className="card-content">
                    <p>{props.obj.name}</p>
                    <p>{props.obj.email}</p>
                    <p>{props.obj.dob}</p>
                </div>
            </div>
        </div>
    )
}

export default UserListItem;