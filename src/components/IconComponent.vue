<template>
  <span class="icon-container">
    <FontAwesomeIcon v-if="icon" :class="icon" :icon="icon" />
  </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

export default {
  name: 'Icon',

  components: {
    FontAwesomeIcon
  },

  props: {
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
</style>
