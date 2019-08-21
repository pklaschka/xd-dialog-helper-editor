import preview from "./preview";
import editor from "./editor";

export default () => ({
    label: 'Select / Dropdown',
    code: 'DialogHelper.types.SELECT',
    uniqueId: Date.now(),

    props: {
        label: 'My text',
        id: 'select-' + Date.now(),
        value: 'option1',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
        ]
    },
    editor: editor,
    preview: preview,
})
