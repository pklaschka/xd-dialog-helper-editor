import React from "react";
import * as PropTypes from "prop-types";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            value: props.value || false
        });
    }

    handleChange = (evt) => {
        this.setState({
            value: evt.target.checked
        });

        if (this.props.onChange)
            this.props.onChange(evt.target.checked);
    };

    render() {
        return (
            <div className="spectrum-Form-item">
                <label id={this.props.name} className="spectrum-Checkbox">
                    <input
                        type="checkbox"
                        className="spectrum-Checkbox-input"
                        name={this.props.name}
                        id={this.props.name}
                        checked={this.state.value}
                        onChange={this.handleChange}
                    />
                    <span className="spectrum-Checkbox-box">
                        <svg focusable="false" aria-hidden="true"
                             className="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark">
                            <use
                                xlinkHref="#spectrum-css-icon-CheckmarkSmall">

                            </use>
                        </svg>
                        <svg focusable="false" aria-hidden="true"
                             className="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark">
                            <use
                                xlinkHref="#spectrum-css-icon-DashSmall">
                            </use>
                        </svg>
                    </span>
                    <span className="spectrum-Checkbox-label">{this.props.label}</span>
                </label>
            </div>
        );
    }
}


Checkbox.propTypes = {
    value: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
