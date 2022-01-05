<template>
  <header class="app-header">
    <router-link to="/">
      <img alt="Go back to the home page" src="../assets/logo.png">
    </router-link>

    <h1>Accessible App</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.app-header {
  background: #F5F5F5;
  display: flex;
  align-items: center;
  position: sticky;
  padding: 5px;
  width: 100%;
  top: 0;
  z-index: 1;
}

a {
  padding: 5px;
}

img {
  height: 60px;
}
</style>