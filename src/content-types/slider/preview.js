import React from "react";

export default function (props) {
    const widthPercent = 100 * (props.element.props.value - props.element.props.htmlAttributes.min) /
        (props.element.props.htmlAttributes.max - props.element.props.htmlAttributes.min);

    return (
        <div className="contentElement">
            <div className="spectrum-Slider spectrum-Slider--filled">
                <div className="spectrum-Slider-labelContainer">
                    <label id="spectrum-Slider-label-8"
                           htmlFor="spectrum-Slider-input-8"
                           className="spectrum-Slider-label">
                        {props.element.props.label}
                    </label>
                    <div role="textbox"
                         aria-readonly="true"
                         aria-labelledby="spectrum-Slider-label-8"
                         className="spectrum-Slider-value">
                        {props.element.props.value}{props.element.props.unit}
                    </div>
                </div>
                <div className="spectrum-Slider-controls">
                    <div className="spectrum-Slider-track" style={{width: widthPercent + '%'}}/>
                    <div className="spectrum-Slider-handle" style={{left: widthPercent + '%'}}>
                        <input type="range" min={props.element.props.htmlAttributes.min}
                               max={props.element.props.htmlAttributes.max}
                               id="spectrum-Slider-input-8"
                               className="spectrum-Slider-input"/>
                    </div>
                    <div className="spectrum-Slider-track" style={{width: (100 - widthPercent) + '%'}}/>
                </div>
            </div>
        </div>
    )
}
