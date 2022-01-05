<template>
  <nav class="main-menu">
    <ul class="main-menu-content">
      <li>
        <router-link
          aria-label="Here you can navigate to the accessibility workshop home page"
          to="/"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          aria-label="Here you can learn more about the accessibility workshop"
          to="/about"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          aria-label="Here you can register for our next workshop"
          to="/contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style scoped>
.main-menu {
  background-color: #f5f5f5;
  display: flex;
  position: sticky;
  padding: 5px;
  top: 70px;
  z-index: 1;
}

.main-menu-content {
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
}

li {
  display: inline-block;
  text-align: center;
  flex: 1;
}

a {
  color: #003b49;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
  padding: 10px;
}

a:hover {
  text-decoration: underline;
}
</style>