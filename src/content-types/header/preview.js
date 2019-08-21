import React from "react";

export default function (props) {
    return (
        <div className="contentElement">
            <h2 className="spectrum-Heading--subtitle1">{props.element.props.label}</h2>
        </div>
    )
}
