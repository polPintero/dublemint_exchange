<template>
  <div class="input-number">
    <input type="text" v-model="value" />
  </div>
</template>

<script>
import { getNumbersFromString } from '@/utils'

export default {
  name: 'InputComp',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number]
    },
    maxValue: {
      type: Number,
      default: Infinity
    }
  },
  data () {
    return {
      value: this.modelValue
    }
  },
  watch: {
    value (newValue, oldValue) {
      const checkValue = getNumbersFromString(newValue)
      checkValue === null ? (this.value = oldValue) : (this.value = checkValue)
      if (this.value > this.maxValue) this.value = this.maxValue
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>

<style lang="scss">
.input-number {
  border-radius: var(--border-radius);
  width: max-content;
  input {
    padding: var(--gap) var(--gap-double);
    font-size: 1rem;
    color: inherit;
    background: linear-gradient(180deg, #2c2e2f 0%, #404142 100%);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    inset 0px 2px 3px rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 10px;
    &:focus {
      outline: 2px solid #e0f97d;
      filter: drop-shadow(0px 0px 4px #92d300);
    }
  }
}
</style>
