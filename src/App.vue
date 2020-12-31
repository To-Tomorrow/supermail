<template>
  <div id="app">
  <main-tab-bar/>
    <h2>2345678</h2>
    <img src="~assets/img/tabbar/home.png" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from "./components/content/mainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar,
    HelloWorld
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
