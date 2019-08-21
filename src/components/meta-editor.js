import React from "react";
import TextInput from "./base-components/forms/text-input";
import SubmitButton from "./base-components/forms/submit-button";
import logo from '../assets/logo.png'; // Tell Webpack this JS file uses this image
import * as PropTypes from 'prop-types';


class MetaEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 'dialog',
            title: 'My dialog',
            okButtonText: 'Ok',
            cancelButtonText: 'Cancel'
        };

        this.props.onChange(this.state);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onShowDialog();
    };

    updateValue = (name, value) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState[name] = value;
        this.setState(newState);

        if (this.props.onChange) {
            this.props.onChange(newState);
        }
    };

    createInput = (id, label) => {
        return (
            <TextInput
                name={'dialog-' + id}
                label={label}
                value={this.state[id]}
                onChange={(value) => this.updateValue(id, value)}
            />
        )
    };

    render() {
        return (
            <aside>
                <img src={logo} alt="xd-dialog-helper logo"/>
                <h1>xd-dialog-helper Editor v1.0</h1>
                <form onSubmit={this.handleSubmit} className="spectrum-Form">
                    {this.createInput('id', 'Dialog id')}
                    {this.createInput('title', 'Dialog title')}
                    {this.createInput('okButtonText', 'Ok button text')}
                    {this.createInput('cancelButtonText', 'Cancel button text')}

                    <SubmitButton label="Generate code" />
                </form>
            </aside>
        );
    }
}

MetaEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    onShowDialog: PropTypes.func.isRequired
};

export default MetaEditor;
