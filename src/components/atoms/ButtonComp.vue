<template>
  <span class="btn__wrap">
    <button
      class="btn"
      :disabled="disabled"
      :isLoading="isLoading"
      :class="{'btn__after--padding': $slots.after || isLoading}"
    >
      {{ label }}
    </button>
    <div class="btn__icon" v-if="$slots.after">
      <slot name="after"></slot>
    </div>
    <IconComp
      v-if="isLoading"
      name="LoaderIconComp"
      class="btn__icon btn__icon--rotate"
    ></IconComp>
  </span>
</template>

<script>
import IconComp, { LoaderIconComp } from '@/components/atoms/IconsVue'

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
      default: false
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
  &__after--padding {
    padding-right: calc(var(--gap-double) * 2);
  }
  padding: var(--gap) var(--gap-double);
  font-size: 1rem;
  color: inherit;
  text-align: left;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @include actionsElemShadow;

  &:focus {
    @include outlineActiveState;
  }

  &:active {
    outline: none;
    filter: unset;
    @include blockShadowPrimary;
  }

  &[disabled] {
    cursor: not-allowed;
    @include blockShadowSecondary;
  }

  &__icon {
    --size: 1rem;
    position: absolute;
    right: 10px;
    top: 12px;
    display: block;
    width: var(--size);
    height: var(--size);
    &--rotate{
      animation: rotating 1s linear infinite;
    }
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
