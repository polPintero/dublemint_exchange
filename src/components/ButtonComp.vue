<template>
  <span class="btn__wrap">
    <button class="btn" :disabled="disabled" :isLoading="isLoading">
      {{ label }}
    </button>
    <IconComp
      v-if="isLoading"
      name="LoaderIconComp"
      class="btn__icon"
    ></IconComp>
  </span>
</template>

<script>
import IconComp, { LoaderIconComp } from '@/components/IconsVue'

export default {
  name: 'ButtonComp',
  components: {
    IconComp,
    /* eslint-disable vue/no-unused-components */
    LoaderIconComp
  },
  props: {
    label: {
      type: String,
      default: 'click'
    },
    disabled: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.btn {
  &__wrap {
    position: relative;
  }
  padding: var(--gap) var(--gap-double);
  font-size: 1rem;
  color: inherit;
  text-align: left;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(180deg, #414344 0%, #2b2d2e 100%);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3);

  &:focus {
    outline: 2px solid #e0f97d;
    filter: drop-shadow(0px 0px 4px #92d300);
  }

  &:active {
    outline: none;
    filter: unset;
    background: linear-gradient(180deg, #2c2e2f 0%, #404142 100%);
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
      inset 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  &[isLoading="true"] {
    padding-right: calc(var(--gap-double) * 2);
  }

  &[disabled] {
    cursor: not-allowed;
    background: linear-gradient(180deg, #4f5254 0%, #393b3a 97.3%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  }

  &__icon {
    --size: 1rem;
    position: absolute;
    right: 10px;
    top: 12px;
    display: block;
    width: var(--size);
    height: var(--size);
    animation: rotating 1s linear infinite;
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
