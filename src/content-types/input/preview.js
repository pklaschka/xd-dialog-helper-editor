import React from "react";

export default function (props) {
    return (
        <div className="contentElement">
            <div className="width100">
                <label htmlFor={props.element.props.id} className="spectrum-FieldLabel">
                    {props.element.props.label}
                </label>
                <label>
                    <input
                        // required={props.element.props.required}
                        type={props.element.props.htmlAttributes.type}
                        value={props.element.props.value}
                        placeholder={props.element.props.label}
                        name={props.element.props.id}
                        id={props.element.props.id}
                        onChange={() => undefined}
                        className="spectrum-Textfield"/>
                </label>
            </div>
        </div>
    )
}
