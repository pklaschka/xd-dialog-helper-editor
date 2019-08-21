import React from 'react';
import TextInput from '../components/base-components/forms/text-input';
import TextArea from '../components/base-components/forms/text-area';
import Checkbox from "../components/base-components/forms/checkbox";
import Select from "../components/base-components/forms/select";

/**
 * Creates a text input
 * @param {object} props Props of the function
 * @param {function(id: string, value: *): void} handleChange The change handler
 * @param {string} id The id of the input (value must be in `props[id]`)
 * @param {string} label The label of the input
 * @param {'text' | 'number' | 'password'} [type='text'] The type of the input
 */
export function createInput(props, handleChange, id, label, type = 'text') {
    return (
        <TextInput
            name={props.element.uniqueId + '-' + id}
            label={label}
            type={type}
            value={props.element.props[id] !== undefined ? props.element.props[id] : props.element.props.htmlAttributes[id]}
            onChange={(value) => handleChange(id, value)}
        />
    )
}

/**
 * Creates a text area
 * @param {object} props Props of the function
 * @param {function(id: string, value: *): void} handleChange The change handler
 * @param {string} id The id of the input (value must be in `props[id]`)
 * @param {string} label The label of the text area
 */
export function createTextArea(props, handleChange, id, label) {
    return (
        <TextArea
            name={props.element.uniqueId + '-' + id}
            label={label}
            value={props.element.props[id]}
            onChange={(value) => handleChange(id, value)}
        />
    )
}


/**
 * Creates a checkbox
 * @param {object} props Props of the function
 * @param {function(id: string, value: *): void} handleChange The change handler
 * @param {string} id The id of the input (value must be in `props[id]`)
 * @param {string} label The label of the text area
 */
export function createCheckbox(props, handleChange, id, label) {
    return (
        <Checkbox
            name={props.element.uniqueId + '-' + id}
            label={label}
            value={props.element.props[id]}
            onChange={(value) => handleChange(id, value)}
        />
    )
}


/**
 * Creates a checkbox
 * @param {object} props Props of the function
 * @param {function(id: string, value: *): void} handleChange The change handler
 * @param {string} id The id of the input (value must be in `props[id]`)
 * @param {string} label The label of the text area
 * @param {Array<{value: string, label: string}>} options Available options
 */
export function createSelect(props, handleChange, id, label, options) {
    return (
        <Select
            name={props.element.uniqueId + '-' + id}
            label={label}
            value={props.element.props[id]}
            onChange={(value) => handleChange(id, value)}
            options={options}
        />
    )
}
