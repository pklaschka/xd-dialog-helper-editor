import React, { Fragment } from 'react';
import types from '../../content-types/_all';
import ActionButton from '../base-components/action-button';
import * as PropTypes from 'prop-types';

export default function ElementAdder(props) {
    return (
        <Fragment>
            <h2>Append element:</h2>
            {types.map(type => {
                return (
                    <ActionButton key={type().code} onClick={() => props.onAdd(type())}>{type().label}</ActionButton>
                )
            })}
        </Fragment>
    )
}

ElementAdder.propTypes = {
    onAdd: PropTypes.func.isRequired
};
