<template>
  <component :is="computedName" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'TheIcon',
  props: {
    name: { type: String, default: '' }
  },
  computed: {
    computedName () {
      return this.findIconComponent(this, this.$props.name)
    }
  },
  methods: {
    findIconComponent (ctx, iconName) {
      const components = (ctx.$options || {}).components
      const iconComponent = components && components[iconName]
      return iconComponent || this.findIconComponent(ctx.$parent, iconName)
    }
  }
}
</script>
