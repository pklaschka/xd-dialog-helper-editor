import React from 'react';
import * as PropTypes from 'prop-types';

export default function ActionButton(props) {
    return (
        <button type="button" onClick={props.onClick} disabled={props.disabled || false} className="spectrum-ActionButton">
            <span className="spectrum-ActionButton-label">
                {props.children}
            </span>
        </button>
    )
}

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};
