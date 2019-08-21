import beautify from 'js-beautify';

/**
 * Generates code for the passed meta- and content information
 * @param meta
 * @param {Array<object>} contents
 * @return {string} The generated, formatted code
 */
export default function generateCode(meta, contents) {
    const contentString = '[' + (contents.map(content => {
        let contentProps = '{type:' + content.code + ',';

        for (const name in content.props) {
            if (content.props.hasOwnProperty(name))
                contentProps += `${name}: ${JSON.stringify(content.props[name])},`
        }

        contentProps += '}';
        return contentProps;
    })).join(',') + ']';

    return beautify(`
const DialogHelper = require('xd-dialog-helper');

async function show${upperCamelize(meta.id)}Dialog() {
    try {
        const results = await DialogHelper.showDialog(${JSON.stringify(meta.id )|| ''}, 
        ${JSON.stringify(meta.title )|| ''}, ${contentString}, {
            okButtonText: ${JSON.stringify(meta.okButtonText)},
            cancelButtonText: ${JSON.stringify(meta.cancelButtonText)},
        });

        // Do something with the results here...
    } catch (e) {
        // Dialog got canceled
    }
}

module.exports = show${upperCamelize(meta.id)}Dialog;    
    `);
}

function upperCamelize(str) {
    str = str || '';

    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return match.toUpperCase();
    });
}
