import React, {Fragment} from "react";
import {createInput} from "../_helpers";

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
            {createInput(props, handleHTMLAttributesChange, 'min', 'Minimum value', 'number')}
            {createInput(props, handleHTMLAttributesChange, 'max', 'Maximum value', 'number')}
            {createInput(props, handleChange, 'value', 'Initial value', 'number')}
            {createInput(props, handleChange, 'unit', 'Unit')}
        </Fragment>
    );
}
