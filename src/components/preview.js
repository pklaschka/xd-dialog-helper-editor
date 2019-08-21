import React from 'react';
import * as PropTypes from 'prop-types';

export default function Preview(props) {
    return (
        <main>
            <div width="360" className="spectrum-Dialog spectrum-Dialog is-open cssdocs-Dialog">
                <h1 className="spectrum-Dialog-title">
                    {props.meta.title}
                </h1>
                <div className="spectrum-Dialog-content spectrum-Body">
                    {props.contents.map(content => {
                        return (<content.preview element={content} key={content.uniqueId}/>)
                    })}
                </div>
                <div className="spectrum-Dialog-footer">
                    <button className="spectrum-Button spectrum-Button--cta">
                        {props.meta.okButtonText}
                    </button>
                    <button className="spectrum-Button spectrum-Button--secondary">
                        {props.meta.cancelButtonText}
                    </button>
                </div>
            </div>
        </main>
    )
}

Preview.propTypes = {
    meta: PropTypes.objectOf(PropTypes.string).isRequired,
    contents: PropTypes.arrayOf(PropTypes.object).isRequired
};
