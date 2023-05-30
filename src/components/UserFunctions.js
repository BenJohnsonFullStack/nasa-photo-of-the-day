import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";


function UserFunctions() {
    const [numberOfLikes, setNumberOfLikes] = useState(328);
    const [liked, setLiked] = useState(false)

    const updateLikes = () => {
            if (liked) {
                setNumberOfLikes(numberOfLikes - 1)
                setLiked(false)
            } else {
                setNumberOfLikes(numberOfLikes + 1)
                setLiked(true)
            }
        }

    return (
        <div className="social">
            <p className="likes">{numberOfLikes} likes</p>
            <p className="heart icons" 
                onClick={() => {
                    updateLikes()
                }}>
                    {liked ? <FontAwesomeIcon icon={faSolidHeart} /> : <FontAwesomeIcon icon={faHeart} />}
            </p>
            <p className="icons"><FontAwesomeIcon icon={faComment} /></p>
            <p className="icons"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></p>
        </div>
    )
}

export default UserFunctions;