import preview from "./preview";
import editor from "./editor";

export default () => ({
    label: 'Input',
    code: 'DialogHelper.types.TEXT_INPUT',
    uniqueId: Date.now(),

    props: {
        label: 'My text',
        id: 'input-' + Date.now(),
        value: '',
        required: false,
        htmlAttributes: {
            type: 'text'
        }
    },
    editor: editor,
    preview: preview,
})
