<template>
  <div class="dropdown" @click="toggleVisible">
    <div class="dropdown__wrap-btn">
      <IconComp name="ChevronIconComp" class="dropdown__chevron"></IconComp>
      <button class="dropdown__btn">{{ modelValue || placeholder }}</button>
    </div>
    <ul
      class="dropdown__content"
      :class="{'dropdown__content--show': visible}"
      @click="toggleVisible"
    >
      <template v-for="item in list" :key="item.name">
        <li
          class="dropdown__content__item"
          :class="{'dropdown__content__item--active': item.name === modelValue}"
          :value="item.name"
          v-if="conditionVisible(item)"
          @click="$emit('update:modelValue', item.name)"
        >
          <span>{{ item.name }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import IconComp, { ChevronIconComp } from '@/components/atoms/IconsVue'

export default {
  name: 'DropdownComp',
  components: {
    IconComp,
    /* eslint-disable vue/no-unused-components */
    ChevronIconComp
  },
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
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ''
    },
    conditionVisible: {
      type: Function,
      default () {
        return () => true
      }
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible
      setTimeout(() => {
        this.visible
          ? document.addEventListener('click', this.toggleVisible)
          : document.removeEventListener('click', this.toggleVisible)
      }, 0)
    }
  }
}
</script>

<style lang="scss">
.dropdown {
  width: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &__btn {
    width: 100%;
    padding: var(--gap) var(--gap-double);
    padding-right: calc(var(--gap-double) * 2);
    font-size: 1rem;
    color: inherit;
    text-align: left;
    cursor: pointer;
    border: none;
    background: linear-gradient(180deg, #414344 0%, #2b2d2e 100%);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3);

    &:focus {
      outline: 2px solid #e0f97d;
      filter: drop-shadow(0px 0px 4px #92d300);
    }
  }

  &__wrap-btn {
    position: relative;
  }

  .dropdown__chevron {
    position: absolute;
    right: 5px;
    top: 50%;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
    z-index: 1;
    pointer-events: none;
  }

  &__content {
    display: none;
    position: absolute;
    margin-block-start: 5px;
    padding-left: 0;
    right: 0;
    background: linear-gradient(180deg, #4f5254 0%, #393b3a 97.3%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3);
    z-index: 999999;

    &__item {
      padding: var(--gap) var(--gap-double);
      text-decoration: none;
      display: block;
      border-bottom: 1px solid #2a2b2d;
      &:hover {
        @include blockShadowPrimary;
        span {
          @include txtShadowTxtPrimary;
        }
      }
      &--active {
        @include txtShadowTxtPrimary;
      }
    }

    &--show {
      display: block;
    }
  }
}
</style>
