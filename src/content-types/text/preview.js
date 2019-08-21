import React from "react";

export default function (props) {
    return (
        <div className="contentElement">
            <p className="spectrum-Body width100">{props.element.props.label}</p>
        </div>
    )
}
