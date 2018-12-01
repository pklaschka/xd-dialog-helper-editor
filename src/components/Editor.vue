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
            <div class="spectrum-Form-item">
                <label class="spectrum-FieldLabel">ID:</label>
                <input type="text" v-model="element.id" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="element.type !== 7">
                <label class="spectrum-FieldLabel">{{element.type === 0 || element.type === 1 ? 'Text' : 'Label'}}:</label>
                <textarea v-if="element.type === 1" type="text" v-model="element.label" class="spectrum-Textfield spectrum-Textfield--multiline">
                </textarea>
                <input v-else type="text" v-model="element.label" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [2,4])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <input type="text" v-model="element.value" class="spectrum-Textfield">
            </div>
            <div class="spectrum-Form-item" v-if="inList(element.type, [3])">
                <label class="spectrum-FieldLabel">Initial value:</label>
                <textarea v-model="element.value" class="spectrum-Textfield spectrum-Textfield--multiline"></textarea>
            </div>
            <div class="spectrum-Form-item" v-else-if="inList(element.type, [8])">
                <label class="spectrum-FieldLabel">Initially checked:</label>
                <input type="checkbox" v-model="element.value" class="spectrum-Textfield">
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
