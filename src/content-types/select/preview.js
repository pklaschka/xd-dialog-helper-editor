import React from "react";

export default function (props) {
    return (
        <div className="contentElement">
            <div className="width100 selectWrapper">
                <label htmlFor={props.element.props.id}
                       className="spectrum-FieldLabel">
                    {props.element.props.label}
                </label>
                <div className="selectWrapper">
                    <label>
                        <select id={props.element.props.id}
                                name={props.element.props.id}
                                className="spectrum-FieldButton spectrum-Dropdown-trigger"
                                value={props.element.props.value}
                                onChange={() => undefined}
                        >
                            {props.element.props.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                    <svg focusable="false" aria-hidden="true"
                         className="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon">
                        <use xlinkHref="#spectrum-css-icon-ChevronDownMedium"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
