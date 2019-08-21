import React from "react";

export default function (props) {
    return (
        <div className="contentElement">
            <label className="spectrum-Checkbox">
                <input type="checkbox" id={props.element.props.name}
                       checked={props.element.props.value}
                       onChange={() => undefined}
                       className="spectrum-Checkbox-input"/>
                <span
                    className="spectrum-Checkbox-box">
                            <svg focusable="false" aria-hidden="true"
                                 className="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark">
                                <use
                                    xlinkHref="#spectrum-css-icon-CheckmarkSmall"/>
                            </svg>
                            <svg focusable="false"
                                 aria-hidden="true"
                                 className="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark">
                                <use
                                    xlinkHref="#spectrum-css-icon-DashSmall"/>
                            </svg>
                        </span>
                <span
                    className="spectrum-Checkbox-label">{props.element.props.label}
                        </span>
            </label>
        </div>
    )
}
