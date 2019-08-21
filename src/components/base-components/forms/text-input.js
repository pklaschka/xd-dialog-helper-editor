import React from "react";
import * as PropTypes from "prop-types";

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            value: props.value || ''
        });
    }

    handleChange = (evt) => {
        this.setState({
            value: evt.target.value
        });

        if (this.props.onChange)
            this.props.onChange(evt.target.value);
    };

    render() {
        return (
            <div className="spectrum-Form-item">
                <label htmlFor={this.props.name} className="spectrum-FieldLabel">{this.props.label}:</label>
                <label id={this.props.name} >
                    <input
                        type={this.props.type || 'text'}
                        className="spectrum-Textfield"
                        name={this.props.name}
                        id={this.props.name}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
            </div>
        );
    }
}


TextInput.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
