<template>
  <div id="app">
    <Navbar />
    <!-- Main content will go here -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  background: url('https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdoaXRlfGVufDB8fDB8fHww') no-repeat center center fixed;
  background-size: cover;
}
#app {
  min-height: 100vh;
  background: transparent;
}
</style>
