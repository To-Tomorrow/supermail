<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners">
      <a :href="item.link" :key="index">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "../../../components/common/swiper";


export default {
  name: "HomeSwiper",
  components:{
    SwiperItem,Swiper
  },
  props:{
    banners:{
      type:Array,
      default(){return[]}
    }
  }
}
</script>

<style scoped>

</style>
