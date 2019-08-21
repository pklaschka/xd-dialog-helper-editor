import React from "react";
import * as PropTypes from 'prop-types';

export default function SubmitButton(props) {
    return (
        <button type="submit" className="spectrum-Button spectrum-Button--cta">
            <span className="spectrum-Button-label">{props.label}</span>
        </button>
    );
}

SubmitButton.propTypes = {
    label: PropTypes.string.isRequired
};
