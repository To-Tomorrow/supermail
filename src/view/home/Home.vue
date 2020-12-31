<template>

  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>



    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "home",
      components: {NavBar}
    }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff

  }

</style>
