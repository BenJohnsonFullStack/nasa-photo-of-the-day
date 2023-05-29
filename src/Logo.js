import React from "react";

function Logo() {
    return (
        <div>
            <img src={require("./assets/nasa-logo.png")} alt="NASA logo" className="logo"/>
            <h1>Astronomy Photo of the Day</h1>
        </div>
    )
}

export default Logo;