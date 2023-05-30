import React from "react";

function Menu() {
    const isLoggedIn = false;
    return (
        <div className="profile-menu toggle-menu">
            <ul>
                <a href="profile.html"><li>Profile</li></a>
                <a href="settings.html"><li>Settings</li></a>
                <a href="index.html"><li>{isLoggedIn ? "Log Out" : "Log In"}</li></a>
            </ul>
        </div>
    )
}

export default Menu;