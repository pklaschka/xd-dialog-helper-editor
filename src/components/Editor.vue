<template>
    <div class="spectrum-Well">
        <h4>{{index+1}}.: <code>{{elementType()}}</code>#{{element.id}}</h4>

        <button class="spectrum-ActionButton" @click="up">
            <span class="spectrum-ActionButton-label">Up</span>
        </button>
        <button class="spectrum-ActionButton" @click="down">
            <span class="spectrum-ActionButton-label">Down</span>
        </button>
        <button class="spectrum-ActionButton" @click="deleteElement">
            <span class="spectrum-ActionButton-label">Delete</span>
        </button>

        <form class="spectrum-Form">
            <!-- ID: -->
            <div class="spectrum-Form-item">
                <label class="spectrum-FieldLabel">ID:</label>
                <label>
                    <input type="text" v-model="element.id" class="spectrum-Textfield">
                </label>
            </div>
            <!-- Label: -->
            <div class="spectrum-Form-item" v-if="element.type !== 7">
                <label class="spectrum-FieldLabel">{{element.type === 0 || element.type === 1 ? 'Text' :
                    'Label'}}:</label>
                <label>
<textarea v-if="element.type === 1" v-model="element.label"
          class="spectrum-Textfield spectrum-Textfield--multiline"></textarea>
                </label>
                <label>
                    <input v-if="element.type !== 1" type="text" v-model="element.label" class="spectrum-Textfield">
                </label>
            </div>
            <!-- Value: -->
            <div class="spectrum-Form-item" v-if="inList(element.type, [2])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <label>
                    <input type="text" v-model="element.value" class="spectrum-Textfield">
                </label>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [4])">
                <label>Options:</label>
                <div class="spectrum-Well" v-for="(option,optionIndex) in element.options" :key="optionIndex">
                    <div class="spectrum-ActionButton" @click="deleteOption(optionIndex)">
                            <span class="spectrum-ActionButton-label">
                                X
                            </span>
                    </div>
                    <form class="spectrum-Form">
                        <div class="spectrum-Form-item">
                            <label class="spectrum-FieldLabel">Value:</label>
                            <label>
                                <input type="text" v-model="option.value" class="spectrum-Textfield">
                            </label>
                        </div>
                        <div class="spectrum-Form-item">
                            <label class="spectrum-FieldLabel">Label:</label>
                            <label>
                                <input type="text" v-model="option.label" class="spectrum-Textfield">
                            </label>
                        </div>
                    </form>
                </div>

                <p class="spectrum-Link" @click="element.options.push({label: 'Label', value: 'value'})">
                    Add element...
                </p>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [4])">
                <div v-if="element.type === 4" class="width100 selectWrapper">
                    <label :for="element.id + '-editor'" class="spectrum-FieldLabel">Initial value:</label>
                    <div class="selectWrapper">
                        <label>
                            <select class="spectrum-FieldButton spectrum-Dropdown-trigger" v-model="element.value"
                                    :id="element.id + '-editor'" :name="element.id + '-editor'">
                                <option value="undefined">-- none set --</option>
                                <option v-for="(element,index) in element.options" :key="index" :value="element.value">
                                    {{element.label}}
                                </option>
                            </select>
                        </label>
                        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon"
                             focusable="false" aria-hidden="true">
                            <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <label>
                    <input v-model="element.value" type="number" class="spectrum-Textfield">
                </label>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [3])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <label>
                    <textarea v-model="element.value"
                              class="spectrum-Textfield spectrum-Textfield--multiline"></textarea>
                </label>
            </div>
            <div class="spectrum-Form-item" v-else-if="inList(element.type, [8])">
                <label class="spectrum-Checkbox">
                    <input type="checkbox" class="spectrum-Checkbox-input" v-model="element.value"
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
                    <span class="spectrum-Checkbox-label">Initially set</span>
                </label>
            </div>
            <!-- Unit, Min & Max: -->
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Minimum value:</label>
                <label>
                    <input v-model="element.htmlAttributes.min" type="number" class="spectrum-Textfield">
                </label>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Maximum value:</label>
                <label>
                    <input v-model="element.htmlAttributes.max" type="number" class="spectrum-Textfield">
                </label>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Unit name:</label>
                <label>
                    <input v-model="element.unit" type="text" class="spectrum-Textfield">
                </label>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'editor',
        props: ['element', 'array', 'index'],
        data: () => {
            return {}
        },
        methods: {
            up() {
                if (this.index > 0) {
                    let above = this.array[this.index - 1];
                    this.array[this.index - 1] = this.element;
                    this.array[this.index] = above;

                    this.array.push({});
                    this.array.pop();
                }

            },
            down() {
                if (this.index < this.array.length - 1) {
                    let oldBelow = this.array[this.index + 1];
                    this.array[this.index + 1] = this.element;
                    this.array[this.index] = oldBelow;

                    this.array.push({});
                    this.array.pop();
                }
            },
            deleteElement() {
                this.array.splice(this.index, 1);
            },
            deleteOption(index) {
                this.element.options.splice(index, 1);
            },
            inList(element, array) {
                for (let arrayElement of array) {
                    if (element === arrayElement)
                        return true;
                }
                return false;
            },
            elementType() {
                switch (this.element.type) {
                    case 0:
                        return 'HEADER';
                    case 1:
                        return 'TEXT';
                    case 2:
                        return 'TEXT_INPUT';
                    case 3:
                        return 'TEXT_AREA';
                    case 4:
                        return 'SELECT';
                    case 5:
                        return 'SLIDER';
                    case 6:
                        return 'NUMERIC_INPUT';
                    case 7:
                        return 'HR';
                    case 8:
                        return 'CHECKBOX';
                }
            }
        }
    }
</script>

<style lang="scss">
</style>
