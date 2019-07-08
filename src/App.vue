<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: "app",
  components: {
    AppHeader,
    AppSidebar
  }
};
</script>

<style>

</style>
