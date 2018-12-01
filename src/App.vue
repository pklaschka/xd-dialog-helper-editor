<template>
    <div id="app" class="spectrum spectrum-Typography">
        <aside>
            <h1>xd-dialog-helper WYSIWYG-Generator</h1>
            <form class="spectrum-Form">
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Dialog ID:</label>
                    <label>
                        <input type="text" v-model="id" class="spectrum-Textfield">
                    </label>
                </div>
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Dialog title:</label>
                    <label>
                        <input type="text" v-model="title" class="spectrum-Textfield">
                    </label>
                </div>
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Ok button text:</label>
                    <label>
                        <input type="text" v-model="okButtonText" class="spectrum-Textfield">
                    </label>
                </div>
                <div class="spectrum-Form-item">
                    <label class="spectrum-FieldLabel">Cancel button text:</label>
                    <label>
                        <input type="text" v-model="cancelButtonText" class="spectrum-Textfield">
                    </label>
                </div>
            </form>
            <br>
            <button class="spectrum-Button spectrum-Button--cta"
                    onclick="document.getElementById('codeDialog').className='spectrum-Dialog spectrum-Dialog--alert is-open'">
                <span class="spectrum-Button-label">Generate code</span>
            </button>
        </aside>
        <aside>
            <editor v-for="(element, index) in contents" :key="index" :element="element" :index="index"
                    :array="contents"></editor>

            <h2>Append element:</h2>

            <button class="spectrum-ActionButton" @click="insertItem('HEADER')">
                <span class="spectrum-ActionButton-label">Headline</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('TEXT')">
                <span class="spectrum-ActionButton-label">Text</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('TEXT_INPUT')">
                <span class="spectrum-ActionButton-label">Text field</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('TEXT_AREA')">
                <span class="spectrum-ActionButton-label">Text area</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('CHECKBOX')">
                <span class="spectrum-ActionButton-label">Checkbox</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('SLIDER')">
                <span class="spectrum-ActionButton-label">Slider</span>
            </button>
            <button class="spectrum-ActionButton" @click="insertItem('SELECT')">
                <span class="spectrum-ActionButton-label">Dropdown/Select</span>
            </button>
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
                            <label>
                                <input type="text" :placeholder="element.label" :name="element.id" :id="element.id"
                                       :value="element.value ||''" class="spectrum-Textfield">
                            </label>
                        </div>
                        <div v-if="element.type === 3" class="width100">
                            <label :for="element.id" class="spectrum-FieldLabel">{{element.label}}</label>
                            <label>
<textarea :placeholder="element.label" :name="element.id" :id="element.id"
          class="spectrum-Textfield spectrum-Textfield--multiline" v-model="element.value">
</textarea>
                            </label>
                        </div>
                        <div v-if="element.type === 4" class="width100 selectWrapper">
                            <label :for="element.id" class="spectrum-FieldLabel">{{element.label}}</label>
                            <div class="selectWrapper">
                                <label>
                                    <select class="spectrum-FieldButton spectrum-Dropdown-trigger"
                                            :value="element.value"
                                            :id="element.id" :name="element.id">
                                        <option v-for="(element,index) in element.options" :key="index"
                                                :value="element.value">{{element.label}}
                                        </option>
                                    </select>
                                </label>
                                <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon"
                                     focusable="false" aria-hidden="true">
                                    <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="spectrum-Slider spectrum-Slider--filled" v-if="element.type === 5">
                            <div class="spectrum-Slider-labelContainer">
                                <label class="spectrum-Slider-label" id="spectrum-Slider-label-8"
                                       for="spectrum-Slider-input-8">{{element.label}}</label>
                                <div class="spectrum-Slider-value" role="textbox" aria-readonly="true"
                                     aria-labelledby="spectrum-Slider-label-8">{{element.value}}{{element.unit}}
                                </div>
                            </div>
                            <div class="spectrum-Slider-controls">
                                <div class="spectrum-Slider-track"
                                     v-bind:style="{ width: (element.value/element.htmlAttributes.max*100) + '%'}"></div>
                                <div class="spectrum-Slider-handle"
                                     v-bind:style="{ left: (element.value/element.htmlAttributes.max*100) + '%'}">
                                    <input type="range" class="spectrum-Slider-input" :value="element.value"
                                           :min="element.htmlAttributes.min"
                                           :max="element.htmlAttributes.max" id="spectrum-Slider-input-8">
                                </div>
                                <div class="spectrum-Slider-track"
                                     v-bind:style="{ width: (100 - element.value/element.htmlAttributes.max*100) + '%'}"></div>
                            </div>
                        </div>
                        <hr class="spectrum-Rule spectrum-Rule--medium" v-if="element.type === 7">
                        <label class="spectrum-Checkbox" v-if="element.type === 8">
                            <input type="checkbox" class="spectrum-Checkbox-input" :checked="element.value"
                                   id="checkbox-0">
                            <span class="spectrum-Checkbox-box">
    <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false"
         aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-CheckmarkSmall"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark" focusable="false"
         aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-DashSmall"></use>
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

        <div id="codeDialog" class="spectrum-Dialog spectrum-Dialog--alert">
            <div class="spectrum-Dialog-header">
                <h2 class="spectrum-Dialog-title">The CSS code</h2>
            </div>
            <div class="spectrum-Dialog-content">
                <pre onkeyup="event.preventDefault()" onkeypress="event.preventDefault()" contenteditable="true"
                     onclick="requestAnimationFrame(()=>document.execCommand('selectall',null))"><code>{{code}}</code></pre>
            </div>
            <div class="spectrum-Dialog-footer">
                <button class="spectrum-Button spectrum-Button--secondary"
                        onclick="document.getElementById('codeDialog').className='spectrum-Dialog spectrum-Dialog--alert'">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from "@/components/Editor";
    import beautify from "js-beautify";

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
                id: 'MyDialog',
                title: 'Hello xd-dialog-helper!',
                okButtonText: 'Insert',
                cancelButtonText: 'Cancel',
                dialogWidth: 360,

                contents: [
                    {
                        type: DialogHelper.HR,
                        id: 'myHR'
                    },
                ]
            }
        },
        computed: {
            code: function () {
                return beautify(`const DialogHelper = require('xd-dialog-helper');

async function show${this.id}() {
    try {
        const results = DialogHelper.showDialog(${JSON.stringify(this.id)}, ${JSON.stringify(this.title)}, ${JSON.stringify(this.contents)}, {
            okButtonText: ${JSON.stringify(this.okButtonText)},
            cancelButtonText: ${JSON.stringify(this.cancelButtonText)}
        });

        // Do something with the results here...
    } catch (e) {
        // Dialog got canceled
    }
}

module.exports = show${this.id};`, {});
            }
        },
        methods: {
            insertItem(type) {
                if (type === 'TEXT') {
                    this.contents.push({
                        type: DialogHelper.TEXT,
                        id: 'text-' + Date.now(),
                        label: 'Lorem Ipsum'
                    });
                } else if (type === 'HEADER') {
                    this.contents.push({
                        type: DialogHelper.HEADER,
                        id: 'header-' + Date.now(),
                        label: 'New section'
                    });
                } else if (type === 'TEXT_INPUT') {
                    this.contents.push({
                        type: DialogHelper.TEXT_INPUT,
                        id: 'input-' + Date.now(),
                        label: 'Write something:',
                        value: 'Hello world!'
                    });
                } else if (type === 'CHECKBOX') {
                    this.contents.push({
                        type: DialogHelper.CHECKBOX,
                        id: 'checkbox-' + Date.now(),
                        label: 'I agree',
                        value: true
                    });
                } else if (type === 'TEXT_AREA') {
                    this.contents.push({
                        type: DialogHelper.CHECKBOX,
                        id: 'myTextInput',
                        label: 'Message',
                        value: true
                    });
                } else if (type === 'SELECT') {
                    this.contents.push({
                        type: DialogHelper.SELECT,
                        id: 'select-' + Date.now(),
                        label: 'Choose one:',
                        options: [
                            {value: 'opt1', label: 'Option 1'},
                            {value: 'opt2', label: 'Option 2'},
                        ]
                    });
                } else if (type === 'SLIDER') {
                    this.contents.push({
                        type: DialogHelper.SLIDER,
                        id: 'slider-' + Date.now(),
                        label: 'How much',
                        htmlAttributes: {
                            min: 0,
                            max: 100
                        },
                        unit: '%',
                        value: 60
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
            > *:not(.spectrum-Checkbox),
            :not(.spectrum-Checkbox) > *:not(svg) {
                &.spectrum-Textfield,
                &.spectrum-Form-item,
                &.spectrum-FieldLabel {
                    width: 100%;
                }

                //width: 100%;
            }

            .spectrum-Form {
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

            .spectrum-Dialog, .spectrum-Dialog.is-open {
                position: absolute;
                margin: 0;
                width: 360px;
            }

            a {
                display: block;
            }
        }
    }

    .spectrum-Dialog {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    }

    textarea {
        resize: vertical;
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
