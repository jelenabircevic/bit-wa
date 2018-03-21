import React from 'react';

const UserListItem = props => {
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div id="round" className="card-image">
                    <img className="avatar" src={props.obj.image} alt="user_img" />
                </div>
                <div className="card-stacked left">
                    <div className="card-content">
                        <p>{props.obj.fullName}</p>
                        <p className="email icon">{props.obj.email}</p>
                        <p className="birthday icon">{props.obj.dob}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListItem;