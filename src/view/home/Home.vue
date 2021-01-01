<template>

  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>


import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";


import {getHomeMultidate} from "../../network/home";

export default {
  name: "home",
  components: {NavBar, HomeSwiper, RecommendView},
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidate().then(res => {
      this.banners = res.data.banner.list
      console.log(res.data.recommend.list);
      this.recommends = res.data.recommend.list
    })
  }

}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff

}

</style>
