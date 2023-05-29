import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
    const isLoggedIn = true;
    const userName = "Ben Johnson";
        return (
        <div className="Profile">
            <p className="sign-up">{isLoggedIn ? "Log Out" : "Sign Up" }</p>
            <p class="sign-in">{isLoggedIn ? `${userName}` : "Log In"}</p>
            {isLoggedIn
                ?
                <img src={require("./assets/me.png")} alt="a user profile icon" className="profile"/>
                :
                <FontAwesomeIcon icon="fa-solid fa-user" />
            }
        </div>
        )
}

export default Profile;