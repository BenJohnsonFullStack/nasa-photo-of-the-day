import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";


function UserFunctions() {
    const [numberOfLikes, setNumberOfLikes] = useState(328);
    const [likeIcon, setLikeIcon] = useState(<FontAwesomeIcon icon={faHeart} />)

    const updateLikes = () => {
        function isLiked() {
            if (likeIcon === <FontAwesomeIcon icon={faHeart} />) {
                return false
            } else if (likeIcon === <FontAwesomeIcon icon={faSolidHeart} />){
                return true
            }
        }
            if (isLiked()) {
                setNumberOfLikes(numberOfLikes - 1)
                setLikeIcon(<FontAwesomeIcon icon={faHeart} />) 
            } else {
                setNumberOfLikes(numberOfLikes + 1)
                setLikeIcon(<FontAwesomeIcon icon={faSolidHeart} />)
            }
        }

    return (
        <div className="social">
            <p className="likes">{numberOfLikes} likes</p>
            <p className="heart icons" 
                onClick={("click", () => {
                    updateLikes()
                })}>
                    {likeIcon}
            </p>
            <p className="icons"><FontAwesomeIcon icon={faComment} /></p>
            <p className="icons"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></p>
        </div>
    )
}

export default UserFunctions;