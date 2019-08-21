import React from 'react';
import * as PropTypes from 'prop-types';
import generateCode from "../generate-code";

export default function CodeDialog(props) {
    const code = generateCode(props.meta, props.contents);

    props.meta.id = props.meta.id || '';

    const fileName = props.meta.id.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match) {
        if (+match === 0) return "-"; // or if (/\s+/.test(match)) for white spaces
        return match.toLowerCase();
    }) + '.js';

    return (
        <dialog id="codeDialog" className={"spectrum-Dialog spectrum-Dialog--alert" + (props.open ? " is-open" : "")}>
            <header className="spectrum-Dialog-header">
                <h2 className="spectrum-Dialog-title">The JS code</h2>
            </header>
            <main className="spectrum-Dialog-content">
                <pre><code>{code}</code></pre>
            </main>
            <footer className="spectrum-Dialog-footer">
                <a className="spectrum-Button spectrum-Button--cta"
                   href={'data:text/plain;charset=utf-8,' + encodeURIComponent(code)}
                   download={fileName}>
                    Download {fileName}
                </a>

                <button
                    onClick={props.onClose}
                    className="spectrum-Button spectrum-Button--secondary">
                    Close
                </button>
            </footer>
        </dialog>
    )
}

CodeDialog.propTypes = {
    meta: PropTypes.objectOf(PropTypes.string).isRequired,
    contents: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool
};
