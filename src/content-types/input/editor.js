import React, {Fragment} from "react";
import {createCheckbox, createInput, createSelect} from "../_helpers";

export default function (props) {
    const handleChange = (name, value) => {
        const newProps = JSON.parse(JSON.stringify(props.element.props));
        newProps[name] = value;
        props.onChange(newProps);
    };

    const handleHTMLAttributesChange = (name, value) => {
        const newProps = JSON.parse(JSON.stringify(props.element.props));
        newProps.htmlAttributes[name] = value;
        props.onChange(newProps);
    };

    return (
        <Fragment>
            {createInput(props, handleChange, 'id', 'Element id')}
            {createInput(props, handleChange, 'label', 'Label')}
            {createSelect(props, handleHTMLAttributesChange, 'type', 'Input type', [
                {value: 'text', label: 'Text'},
                {value: 'password', label: 'Password'},
                {value: 'number', label: 'Number'},
            ])}
            {createInput(props, handleChange, 'value', 'Initial value', props.element.props.htmlAttributes.type)}
            {createCheckbox(props, handleChange, 'required', 'Required (validation)')}
        </Fragment>
    );
}
