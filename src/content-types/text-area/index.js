import preview from "./preview";
import editor from "./editor";

export default () => ({
    label: 'Text Area',
    code: 'DialogHelper.types.TEXT_AREA',
    uniqueId: Date.now(),

    props: {
        label: 'My text',
        id: 'ta-' + Date.now(),
        value: '',
        required: false
    },
    editor: editor,
    preview: preview,
})
