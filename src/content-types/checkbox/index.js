import preview from "./preview";
import editor from "./editor";

export default () => ({
    label: 'Checkbox',
    code: 'DialogHelper.types.CHECKBOX',
    uniqueId: Date.now(),

    props: {
        label: 'I accept the terms and conditions',
        id: 'cb-' + Date.now(),
        value: false,
        required: true
    },
    editor: editor,
    preview: preview,
})
