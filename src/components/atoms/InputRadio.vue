<template>
  <label class="input-radio" v-for="item in list" :key="item">
    {{ item[labelKey] || item }}
    <input
      type="radio"
      v-model="radioValue"
      :value="item[valueKey] || item"
      :name="name"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'InputRadio',
  emits: ['update:modelValue'],
  props: {
    list: {
      type: [Array, Object],
      default: () => []
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    valueKey: {
      type: [String, Number],
      default: ''
    },
    labelKey: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      radioValue: this.modelValue
    }
  }
}
</script>

<style lang="scss">
.input-radio {
  display: block;
  width: 100%;
  cursor: pointer;
  input[type='radio'] {
    position: relative;
    &:checked:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #b7dd18 0%, #4b9800 100%);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3),
        inset 0px 3px 1px rgba(255, 255, 255, 0.7);
      border-radius: 100%;
    }
  }
}
</style>
