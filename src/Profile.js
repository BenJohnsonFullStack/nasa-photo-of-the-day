import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    const showMenu = () => {
       const dropDown =  document.querySelector(".profile");
       dropDown.classList.toggle("dropdown");
    }

    const isLoggedIn = false;
    const userName = "Ben Johnson";
        return (
        <div className="profile">
            <p class="sign-up">{isLoggedIn ? `${userName}` : "Sign Up"}</p>
            {isLoggedIn
                ?
                <img src={require("./assets/me.png")} alt="a user profile icon" className="profile" 
                    onClick={("click", (e) => {
                        console.log(e);
                    })}/>
                :
                <FontAwesomeIcon icon={faUser} 
                    onClick={("click", (e) => {
                        console.log(e);
                })}/>
            }
        </div>
        )
}

export default Profile;