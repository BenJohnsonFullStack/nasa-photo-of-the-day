import React from "react";

function UserComments(props) {
    const { user } = props
        return (
            <div className="user-comment">
                <div className="user-info">
                    <img className="profile-pic comment-pic" src={user.img} alt="the profile pic associated with a user comment"/>
                    <h4>{user.userName}</h4>
                </div>
                <p className="comment-text">{user.commentText}</p>
            </div>
        )
}

export default UserComments;