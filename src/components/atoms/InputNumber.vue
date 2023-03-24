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
    @include blockShadowPrimary;
    border: none;
    border-radius: 10px;
    &:focus {
      @include outlineActiveState;
    }
  }
}
</style>
