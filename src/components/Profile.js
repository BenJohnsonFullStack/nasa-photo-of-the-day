import React from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {

    const toggleMenu = () => {
       const menu = <Menu />
       menu.classList.toggle("toggle-menu");
    }

    const isLoggedIn = false;
    const userName = "Ben Johnson";
        return (
        <div className="profile">
            <p class="sign-up">{isLoggedIn ? `${userName}` : "Sign Up"}</p>
            {isLoggedIn
                ?
                <img src={require("../assets/me.png")} alt="a user profile icon" className="profile-pic" 
                    onClick={("click", () => {
                        toggleMenu();
                    })}/>
                :
                <FontAwesomeIcon icon={faUser} 
                    onClick={("click", () => {
                        toggleMenu();
                })}/>
            }
        </div>
        )
}

export default Profile;