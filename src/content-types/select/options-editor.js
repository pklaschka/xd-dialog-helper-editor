import React, {Fragment} from "react";
import EditorWrapper from "../../components/content-editor/element-editor-wrapper";
import TextInput from "../../components/base-components/forms/text-input";

export default function OptionsEditor(props) {
    const handleInsertOption = () => {
        const newOptions = props.element.props.options.slice().concat([{value: 'value-' + Date.now(), label: 'Label'}]);
        props.onChange('options', newOptions);
    };

    const handleDelete = (index) => {
        const newOptions = props.element.props.options.slice();
        newOptions.splice(index, 1);
        props.onChange('options', newOptions);
    };

    const handleOptionChange = (index, propName, value) => {
        const newOptions = props.element.props.options.slice();
        newOptions[index][propName] = value;
        props.onChange('options', newOptions);
    };

    return (
        <Fragment>
            <h5>Options:</h5>
            {props.element.props.options.map((option, index) => (
                <EditorWrapper key={option.value}
                               first={index === 0}
                               last={index === props.element.props.options.length - 1}
                               onDelete={() => handleDelete(index)}>
                    <TextInput onChange={(value) => handleOptionChange(index, 'value', value)}
                               value={option.value}
                               label={"Value"}
                               name={option.value + "-value"}/>
                    <TextInput onChange={(value) => handleOptionChange(index, 'label', value)}
                               value={option.label}
                               label={"Label"}
                               name={option.value + "-label"}/>
                </EditorWrapper>
            ))}
            <p className="spectrum-Link" onClick={handleInsertOption}>Insert new option...</p>
        </Fragment>
    );
}
