<template>
  <Transition name="modal">
    <div v-if="show" class="modal-wrap">
      <div class="modal-container">
        <div class="modal-header" v-if="$slots.header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body" v-if="$slots.body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  methods: {
    closeModal (event) {
      if (event.key !== 'Escape') return
      this.$emit('close')
    }
  },
  mounted () {
    document.addEventListener('keyup', this.closeModal)
  },
  beforeUnmount () {
    document.removeEventListener('keyup', this.closeModal)
  }
}
</script>

<style>
.modal-wrap {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: min(300px, 50%);
  margin: auto;
  padding: var(--gap-double);
  border-radius: 2px;
  background: linear-gradient(180deg, #4f5254 0%, #393b3a 97.3%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: var(--gap-double) 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
