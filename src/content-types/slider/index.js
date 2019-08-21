import preview from "./preview";
import editor from "./editor";

export default () => ({
    label: 'Slider',
    code: 'DialogHelper.types.SLIDER',
    uniqueId: Date.now(),

    props: {
        label: 'Padding',
        id: 'slider-' + Date.now(),
        value: 15,
        htmlAttributes: {
            max: 40,
            min: 1,
        },
        unit: 'px'
    },
    editor: editor,
    preview: preview,
})
