import React, {Fragment} from "react";
import {createCheckbox, createInput, createTextArea} from "../_helpers";

export default function (props) {
    const handleChange = (name, value) => {
        const newProps = JSON.parse(JSON.stringify(props.element.props));
        newProps[name] = value;
        props.onChange(newProps);
    };

    return (
        <Fragment>
            {createInput(props, handleChange, 'id', 'Element id')}
            {createInput(props, handleChange, 'label', 'Label')}
            {createTextArea(props, handleChange, 'value', 'Initial value')}
            {createCheckbox(props, handleChange, 'required', 'Required (validation)')}
        </Fragment>
    );
}
