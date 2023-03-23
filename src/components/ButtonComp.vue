<template>
  <span class="btn__wrap">
    <button class="btn">{{ label }}</button>
    <IconComp name="LoaderIconComp" class="btn__icon"></IconComp>
  </span>
</template>

<script>
import IconComp, {LoaderIconComp} from '@/components/IconsVue'

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
  padding-right: calc(var(--gap-double) * 2);
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

  &__icon {
    --size: 1rem;
    position: absolute;
    right: 10px;
    top: 12px;
    display: block;
    width: var(--size);
    height: var(--size);
    animation: rotating 3s linear infinite;
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
