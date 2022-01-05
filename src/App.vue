<template>
  <div id="app" role="application">
    <notifications  />
    <!-- *** HEADER *** -->
    <HeaderComponent />

    <!-- *** NAVIGATION *** -->
    <MenuComponent />

    <!-- *** MAIN CONTENT PAGE *** -->
    <main class="main">
      <router-view></router-view>
    </main>

    <!-- *** FOOTER *** -->
    <footer class="footer">
      <p>©Copyright 2021 by Endava. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MenuComponent,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  outline: none;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  margin: 0;
}

h2 {
  text-align: center;
}

article {
  line-height: 1.5em;
  max-width: 800px;
  margin: 0 auto;
  padding: 2em 2.5em;
}

section {
  margin-bottom: 50px;
}

#app {
  font-family: Booster Next FY, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: calc(100vh - 192px);
  font-size: 1em;
  color: #2c3e50;
}

.main {
  padding: 20px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}

:focus {
  outline: none;
  border: none;
  box-shadow: inset 0 0 0 5px #007a78;
}

.notification ::v-deep .vue-notification.success {
  background: #007a78 !important;
  font-weight: 600 !important;
  font-size: 1em !important;
  padding: 20px !important;
}

.notification ::v-deep .vue-notification {
  padding: 20px !important;
}

.page-description {
  text-align: center;
}

label {
  font-weight: 600;
}
</style>
