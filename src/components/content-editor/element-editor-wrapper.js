import React from 'react';
import ActionButton from '../base-components/action-button';
import * as PropTypes from 'prop-types';

export default function EditorWrapper(props) {
    const actionButton = (label, enabled, onClick) => {
        return (
            <ActionButton disabled={!enabled} onClick={onClick}>
                {label}
            </ActionButton>
        )
    };

    return (
        <div className="spectrum-Well list-item">
            {props.element ? <h4>{props.element.label}</h4> : ''}
            <div className="spectrum-Form">
                {props.onMoveUp ? actionButton('Up', !props.first, props.onMoveUp) : ''}
                {props.onMoveDown ? actionButton('Down', !props.last, props.onMoveDown) : ''}
                {actionButton('Delete', true, props.onDelete)}
                {props.children}
            </div>
        </div>
    )
}

EditorWrapper.propTypes = {
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    onMoveUp: PropTypes.func,
    onMoveDown: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
    element: PropTypes.object
};
