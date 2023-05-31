import React from "react";
import UserFunctions from "./UserFunctions";
import styled from "styled-components";

const StyledP = styled.p`
    font-size: 3rem;
    color: midnightblue;
`

const StyledDescription = styled.p`
    width: 50%;
    color: midnightblue;
    margin: 0 auto;
`

function PhotoOfTheDay(props) {
    const { data } = props;
    return (
        <div className="data-container">
            <img src={data.url} alt={`${data.media_type} of ${data.title}`} className="photo"/>
            <div className="under-photo-flex-container">
                <div className="under-photo">
                    <StyledP className="title">{data.title} </StyledP>
                    <p className="copyright">{data.copyright !== null ? `Copyright: ${data.copyright}` : ""}</p>
                </div>
                {/* <UserFunctions /> */}
            </div>
            <StyledDescription className="description">{data.explanation}</StyledDescription>
        </div>
    )
}

export default PhotoOfTheDay;