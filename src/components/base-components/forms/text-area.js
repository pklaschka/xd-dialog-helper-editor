import React from "react";
import * as PropTypes from 'prop-types';

class TextArea extends React.Component {
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
                    
                    <textarea className="spectrum-Textfield spectrum-Textfield--multiline" name={this.props.name} id={this.props.name} value={this.state.value} onChange={this.handleChange} />
                </label>
            </div>
        );
    }
}

TextArea.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default TextArea;
