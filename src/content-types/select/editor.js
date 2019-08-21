import React, {Fragment} from "react";
import {createInput, createSelect} from "../_helpers";
import OptionsEditor from "./options-editor";

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
            <OptionsEditor element={props.element} onChange={handleChange} />
            {createSelect(props, handleChange, 'value', 'Initial value', props.element.props.options)}
        </Fragment>
    );
}
