import editor from "./editor";
import preview from "./preview";

export default () => ({
    label: 'Header',
    code: 'DialogHelper.types.HEADER',

    uniqueId: Date.now(),

    props: {
        label: 'Section header',
        id: 'header-' + Date.now(),
    },

    editor,
    preview,
})
