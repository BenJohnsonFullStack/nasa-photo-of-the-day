import React from "react";
import UserFunctions from "./UserFunctions";

function PhotoOfTheDay(props) {
    const { data } = props;
    return (
        <div className="data-container">
            <img src={data.url} alt={`${data.media_type} of ${data.title}`} className="photo"/>
            <div className="under-photo-flex-container">
                <div className="under-photo">
                    <p className="title">{data.title}</p>
                    <p className="copyright">{data.copyright !== null ? `Copyright: ${data.copyright}` : ""}</p>
                </div>
                {/* <UserFunctions /> */}
            </div>
            <p className="description">{data.explanation}</p>
        </div>
    )
}

export default PhotoOfTheDay;