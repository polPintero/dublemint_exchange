<template>
  <div class="input-number">
    <input type="text" v-model="value" />
  </div>
</template>

<script>
import {getNumbersFromString} from '@/utils'

export default {
  name: 'InputComp',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        let value = getNumbersFromString(newValue)
        if (value === null) value = this.modelValue
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style lang="scss">
.input-number {
  border-radius: var(--border-radius);
  width: max-content;
  // box-shadow: 2px 2px 4px rgba(114, 142, 171, 0.1), -6px -6px 20px #FFFFFF, 4px 4px 20px rgba(111, 140, 176, 0.41);
  // box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  input {
    padding: var(--gap) var(--gap-double);
    font-size: 1rem;
    color: inherit;
    outline: none;
    background: linear-gradient(180deg, #2c2e2f 0%, #404142 100%);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
      inset 0px 2px 3px rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 10px;
    &:focus {
      //   box-shadow: inset 5px 5px 17px #c8c8c8, inset -5px -5px 17px #ffffff;
    }
  }
}
</style>
