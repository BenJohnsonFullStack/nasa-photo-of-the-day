import React from "react";
import { useState, useEffect } from "react";
import UserComments from "./UserComments";

function CommentSection() {
    const [userComment, setUserComment] = useState(null)

    const commentData = {
        user1: {
            id: 1,
            img: "https://images.unsplash.com/photo-1586038693164-cb7ee3fb8e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            userName: "Joe M.",
            comment: "APOTD is the best thing on the internet right now. Literally come here everyday. Mind-blowing."
        },
        user2: {
            id: 2,
            img: "https://images.unsplash.com/photo-1654023097450-f361f895cfb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            userName: "Nikita P.",
            commentText: "Holy cow. Is this real? Just as soon as you start feeling important you see something like this that shows you just how small we all are compared to what else is out there..."
        }
    }

    return(
        <div className="comment-container">
            <h4>Comments</h4>
            <UserComments key={userComment.id} />
        </div>
    )
}

export default CommentSection;