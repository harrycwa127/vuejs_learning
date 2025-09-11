<template>
  <div id="app-container">
    <NavBar :navItems="navItems" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  data() {
    return {
      navItems: ['Home', 'About', 'Services', 'Contact']
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
body {
  background-color: #121212;
}
</style>
