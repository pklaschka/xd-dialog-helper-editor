<template>
    <div id="app" class="spectrum spectrum-Typography">
        <aside>
            <h1>xd-dialog-helper WYSIWYG-Generator</h1>
            <form class="spectrum-Form">
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Dialog title:</label>
                    <input type="text" v-model="title" class="spectrum-Textfield">
                </div>
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Ok button text:</label>
                    <input type="text" v-model="okButtonText" class="spectrum-Textfield">
                </div>
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Cancel button text:</label>
                    <input type="text" v-model="cancelButtonText" class="spectrum-Textfield">
                </div>
            </form>
            <br>
            <button class="spectrum-Button spectrum-Button--cta">
                <span class="spectrum-Button-label">Generate code</span>
            </button>
        </aside>
        <aside>
            <editor v-for="(element, index) in contents" :key="index" :element="element" :index="index"
                    :array="contents"></editor>

            <div class="spectrum-QuickActions spectrum-QuickActions--textOnly is-open">
                <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="insertItem('HEADER')">
                    <span class="spectrum-ActionButton-label">Header</span>
                </button>
                <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="insertItem('TEXT')">
                    <span class="spectrum-ActionButton-label">Text</span>
                </button>
                <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="insertItem('TEXT_INPUT')">
                    <span class="spectrum-ActionButton-label">Text field</span>
                </button>
                <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="insertItem('CHECKBOX')">
                    <span class="spectrum-ActionButton-label">Checkbox</span>
                </button>
            </div>
        </aside>
        <main>
            <div class="spectrum-Dialog spectrum-Dialog is-open cssdocs-Dialog" :width="dialogWidth">
                <!--<div class="spectrum-Dialog-header">-->
                <h1 class="spectrum-Dialog-title">
                    {{title}}
                </h1>
                <!--</div>-->
                <div class="spectrum-Dialog-content spectrum-Body">
                    <div v-for="(element, index) in contents" :key="index" class="contentElement">
                        <h2 v-if="element.type === 0" class="spectrum-Heading--subtitle1">{{element.label}}</h2>
                        <p class="spectrum-Body width100" v-if="element.type === 1">
                            {{element.label}}
                        </p>
                        <div v-if="element.type === 2" class="width100">

                            <label :for="element.id" class="spectrum-FieldLabel">{{element.label}}</label>
                            <input type="text" :placeholder="element.label" :name="element.id" :id="element.id"
                                   :value="element.value ||''" class="spectrum-Textfield">
                        </div>
                        <div v-if="element.type === 3" class="width100">
                            <label :for="element.id" class="spectrum-FieldLabel">{{element.label}}</label>
                            <textarea :placeholder="element.label" :name="element.id" :id="element.id"
                                      class="spectrum-Textfield spectrum-Textfield--multiline" v-model="element.value">
                            </textarea>
                        </div>
                        <div v-if="element.type === 4" class="width100 selectWrapper">
                            <label :for="element.id" class="spectrum-FieldLabel">{{element.label}}</label>
                            <div class="selectWrapper">
                                <select class="spectrum-FieldButton spectrum-Dropdown-trigger" :value="element.value" :id="element.id" :name="element.id">
                                    <option v-for="(element,index) in element.options" :key="index" :value="element.value">{{element.label}}</option>
                                </select>
                                <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
                                    <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="spectrum-Slider" v-if="element.type === 5">
                            <div class="spectrum-Slider-labelContainer">
                                <label class="spectrum-Slider-label" id="spectrum-Slider-label-8"
                                       for="spectrum-Slider-input-8">{{element.label}}</label>
                                <div class="spectrum-Slider-value" role="textbox" aria-readonly="true"
                                     aria-labelledby="spectrum-Slider-label-8">{{element.value}}{{element.unit}}
                                </div>
                            </div>
                            <div class="spectrum-Slider-controls">
                                <div class="spectrum-Slider-track" style="width: 14.4531%;"></div>
                                <div class="spectrum-Slider-handle" style="left: 14.4531%;">
                                    <input type="range" class="spectrum-Slider-input" value="14" step="2" min="10"
                                           max="20" id="spectrum-Slider-input-8">
                                </div>
                                <div class="spectrum-Slider-track" style="width: 85.5469%;"></div>
                            </div>
                        </div>
                        <hr class="spectrum-Rule spectrum-Rule--medium" v-if="element.type === 7">
                        <label class="spectrum-Checkbox" v-if="element.type === 8">
                            <input type="checkbox" class="spectrum-Checkbox-input" :checked="element.value"
                                   id="checkbox-0">
                            <span class="spectrum-Checkbox-box">
    <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false"
         aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-CheckmarkSmall"/>
    </svg>
    <svg class="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark" focusable="false"
         aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-DashSmall"/>
    </svg>
  </span>
                            <span class="spectrum-Checkbox-label">{{element.label}}</span>
                        </label>
                    </div>
                </div>
                <div class="spectrum-Dialog-footer">
                    <button class="spectrum-Button spectrum-Button--cta">{{okButtonText}}</button>
                    <button class="spectrum-Button spectrum-Button--secondary">{{cancelButtonText}}</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Editor from "@/components/Editor";

    class DialogHelper {
        /**
         * A headline
         */
        static get HEADER() {
            return 0;
        }

        /**
         * A simple text (primarily used for descriptions)
         */
        static get TEXT() {
            return 1;
        }

        /**
         * A simple text input
         */
        static get TEXT_INPUT() {
            return 2;
        }

        /**
         * A text area
         */
        static get TEXT_AREA() {
            return 3;
        }

        /**
         * A dropdown select field
         */
        static get SELECT() {
            return 4;
        }

        /**
         * A slider
         */
        static get SLIDER() {
            return 5;
        }

        /**
         * An input for numeric values
         */

        /*static get NUMBER_INPUT() {
            return 6;
        }*/

        /**
         * A horizontal ruler (`<hr>`)
         */
        static get HR() {
            return 7;
        }

        /**
         * A checkbox
         */
        static get CHECKBOX() {
            return 8;
        }
    }

    export default {
        name: 'app',
        components: {Editor},
        data: () => {
            return {
                title: 'Hello xd-dialog-helper!',
                okButtonText: 'Insert',
                cancelButtonText: 'Cancel',
                dialogWidth: 360,

                contents: [
                    {
                        type: DialogHelper.HR,
                        id: 'myHR'
                    },
                    {
                        type: DialogHelper.TEXT,
                        id: 'text',
                        label: 'Please do something in this form...'
                    },
                    {
                        type: DialogHelper.TEXT_INPUT,
                        id: 'userName',
                        label: 'Your Name:'
                    },
                    {
                        type: DialogHelper.CHECKBOX,
                        id: 'checkbox',
                        label: 'MyCheck'
                    },
                    {
                        type: DialogHelper.HEADER,
                        id: 'header',
                        label: 'Another section'
                    },
                    {
                        type: DialogHelper.SLIDER,
                        id: 'slider',
                        label: 'A slider for something',
                        htmlAttributes: {
                            min: 0,
                            max: 200
                        },
                        unit: 'px',
                        value: 10
                    },
                    {
                        type: DialogHelper.TEXT_AREA,
                        id: 'textArea',
                        label: 'Message'
                    },
                    {
                        type: DialogHelper.SELECT,
                        id: 'selectBox',
                        label: 'Message',
                        options: [
                            { value: 'opt1', label: 'Option 1' },
                            { value: 'opt2', label: 'Option 2' },
                        ]
                    },
                ]
            }
        },
        methods: {
            insertItem(type) {
                if (type === 'TEXT') {
                    this.contents.push({
                        type: DialogHelper.TEXT,
                        id: 'myText',
                        label: 'Lorem Ipsum'
                    });
                } else if (type === 'TEXT_INPUT') {
                    this.contents.push({
                        type: DialogHelper.TEXT_INPUT,
                        id: 'myTextInput',
                        label: 'Write something:',
                        value: 'Hello world!'
                    });
                } else if (type === 'CHECKBOX') {
                    this.contents.push({
                        type: DialogHelper.CHECKBOX,
                        id: 'myTextInput',
                        label: 'I agree',
                        value: true
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/css/spectrum-light.css";

    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    #app {
        display: flex;
        flex-direction: row;

        > aside {
            * {
                width: 100%;
            }

            padding: 40px;

            height: 100vh;

            min-width: 400px;

            overflow-y: auto;
            overflow-x: hidden;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
        }

        > main {
            background: #565656;
            min-height: 100vh;
            position: relative;
            width: 100%;

            a {
                display: block;
            }
        }
    }

    textarea {
        resize: vertical;
    }

    .spectrum-Dialog, .spectrum-Dialog.is-open {
        position: absolute;
        //transform: none;
        margin: 0;
        width: 360px;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
        //left: unset;
    }

    .contentElement + .contentElement {
        margin-top: 0.5em;
    }

    .contentElement .width100 {
        &, *:not(svg) {
            width: 100%;
        }
    }

    .selectWrapper {
        position: relative;

        > svg {
            position: absolute;
            pointer-events: none;
            top: 0;
            right: 10px;
        }
    }
</style>
