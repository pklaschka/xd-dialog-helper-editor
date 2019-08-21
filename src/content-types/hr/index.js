import editor from "./editor";
import preview from "./preview";

export default () => ({
    label: 'Horizontal Rule',
    code: 'DialogHelper.types.HR',
    uniqueId: Date.now(),

    props: {
        id: 'hr-' + Date.now(),
    },

    editor,
    preview,
})
