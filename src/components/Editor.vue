<template>
    <div class="spectrum-Well">
        <h4>{{index+1}}.: <code>{{elementType()}}</code>#{{element.id}}</h4>

        <div class="spectrum-QuickActions spectrum-QuickActions--textOnly is-open">
            <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="up">
                <span class="spectrum-ActionButton-label">Up</span>
            </button>
            <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="down">
                <span class="spectrum-ActionButton-label">Down</span>
            </button>
            <button class="spectrum-ActionButton spectrum-ActionButton--quiet" @click="deleteElement">
                <span class="spectrum-ActionButton-label">Delete</span>
            </button>
        </div>

        <form class="spectrum-Form">
            <!-- ID: -->
            <div class="spectrum-Form-item">
                <label class="spectrum-FieldLabel">ID:</label>
                <input type="text" v-model="element.id" class="spectrum-Textfield">
            </div>
            <!-- Label: -->
            <div class="spectrum-Form-item" v-if="element.type !== 7">
                <label class="spectrum-FieldLabel">{{element.type === 0 || element.type === 1 ? 'Text' :
                    'Label'}}:</label>
                <textarea v-if="element.type === 1" type="text" v-model="element.label"
                          class="spectrum-Textfield spectrum-Textfield--multiline">
                </textarea>
                <input v-else type="text" v-model="element.label" class="spectrum-Textfield">
            </div>
            <!-- Value: -->
            <div class="spectrum-Form-item" v-if="inList(element.type, [2])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <input type="text" v-model="element.value" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [4])">
                <div v-if="element.type === 4" class="width100 selectWrapper">
                    <label :for="element.id + '-editor'" class="spectrum-FieldLabel">Initial value:</label>
                    <div class="selectWrapper">
                        <select class="spectrum-FieldButton spectrum-Dropdown-trigger" v-model="element.value" :id="element.id + '-editor'" :name="element.id + '-editor'">
                            <option value="">-- none set --</option>
                            <option v-for="(element,index) in element.options" :key="index" :value="element.value">{{element.label}}</option>
                        </select>
                        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
                            <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <input v-model="element.value" type="number" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [3])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <textarea v-model="element.value" class="spectrum-Textfield spectrum-Textfield--multiline"></textarea>
            </div>
            <div class="spectrum-Form-item" v-else-if="inList(element.type, [8])">
                <label class="spectrum-Checkbox">
                    <input type="checkbox" class="spectrum-Checkbox-input" v-model="element.value"
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
                    <span class="spectrum-Checkbox-label">Initially set</span>
                </label>
            </div>
            <!-- Min & Max: -->
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Minimum value:</label>
                <input v-model="element.htmlAttributes.min" type="number" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [5,6])">
                <label class="spectrum-FieldLabel">Maximum value:</label>
                <input v-model="element.htmlAttributes.max" type="number" class="spectrum-Textfield">
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
                console.log(this.array.pop());
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
