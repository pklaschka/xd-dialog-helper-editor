import React from "react";
import * as PropTypes from "prop-types";

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            value: props.value || false
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
                <div className="width100 selectWrapper">
                    <label htmlFor={this.props.name}
                           className="spectrum-FieldLabel">
                        {this.props.label}:
                    </label>
                    <div className="selectWrapper">
                        <label>
                            <select id={this.props.name}
                                    name={this.props.name}
                                    onChange={this.handleChange}
                                    value={this.state.value}
                                    className="spectrum-FieldButton spectrum-Dropdown-trigger">
                                {this.props.options.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </label>
                        <svg focusable="false" aria-hidden="true"
                             className="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon">
                            <use xlinkHref="#spectrum-css-icon-ChevronDownMedium"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}


Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string, label: PropTypes.string})),
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Select;
