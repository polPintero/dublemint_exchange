<template>
  <div class="dropdown" @click.stop="toggleVisible">
    <button class="dropdown__btn">{{ modelValue }}</button>
    <ul class="dropdown__content" :class="{'dropdown__content--show': visible}">
      <template v-for="item in list" :key="item.name">
        <li
          class="dropdown__content__item"
          :value="item.name"
          v-if="conditionVisible(item)"
          @click="$emit('update:modelValue', item.name)"
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownComp',
  emits: ['update:modelValue'],
  props: {
    list: {
      type: [Array, Object],
      required: true
    },
    valueKey: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number, Boolean]
    },
    conditionVisible: {
      type: Function,
      default() {
        return () => true
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
      this.visible
        ? document.addEventListener('click', this.toggleVisible)
        : document.removeEventListener('click', this.toggleVisible)
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
  &__btn {
    background-color: #3498db;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #2980b9;
    }
  }

  &__content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    &__item {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #ddd;
      }
    }

    &--show {
      display: block;
    }
  }
}
</style>
