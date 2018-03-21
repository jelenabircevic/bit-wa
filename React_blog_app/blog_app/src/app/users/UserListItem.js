import React from 'react';

const UserListItem = props => {
    return (
        <div className="card horizontal col s12">
            <div className="card-image">
                <img className="avatar" src={props.obj.image} alt="user_img"/>
                </div>
            <div className="card-stacked left">
                <div className="card-content">
                    <p>{props.obj.name}</p>
                    <p className="email icon">{props.obj.email}</p>
                    <p className="birthday icon">{props.obj.dob}</p>
                </div>
            </div>
        </div>
    )
}

export default UserListItem;