import editor from "./editor";
import preview from "./preview";

export default () => ({
    label: 'Text',
    code: 'DialogHelper.types.TEXT',

    uniqueId: Date.now(),

    props: {
        label: 'My text',
        id: 'text-' + Date.now(),
    },

    editor,
    preview,
})
