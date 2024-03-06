<template>
  <collapse-transition>
    <div v-show="isOpen">
      <slot/>
    </div>
  </collapse-transition>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"
  export default {
    components: {
      CollapseTransition
    },
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss" scoped>
.collapse {

}
</style>
