<template>
  <div id="tab-bar">
    <slot></slot>
<!--    <TabBarItem path="/home">-->
<!--      <img slot="item-icon" v-if="" src="../../assets/img/tabbar/home.png">-->
<!--      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.png">-->
<!--      <div slot="item-text">首页</div>-->
<!--    </TabBarItem>-->
<!--    <TabBarItem path="/category">-->
<!--      <img slot="item-icon" src="../../assets/img/tabbar/category.png">-->
<!--      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.png">-->
<!--      <div slot="item-text">分类</div>-->
<!--    </TabBarItem>-->
<!--    <TabBarItem path="cart">-->
<!--      <img slot="item-icon" src="../../assets/img/tabbar/cart.png">-->
<!--      <img slot="item-icon-active" src="../../assets/img/tabbar/cart_active.png">-->
<!--      <div slot="item-text">购物车</div>-->
<!--    </TabBarItem>-->
<!--    <TabBarItem path="profile">-->
<!--      <img slot="item-icon" src="../../assets/img/tabbar/profile.png">-->
<!--      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.png">-->
<!--      <div slot="item-text">我的</div>-->
<!--    </TabBarItem>-->

  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBar",
  components: {TabBarItem},
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 48px;
  background-color: #f6f6f6;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
}


</style>
