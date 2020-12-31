<template>
  <tab-bar>
    <TabBarItem path="/home" active-color="#ff5e7d">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" />
      <img slot="item-icon-action" src="~assets/img/tabbar/home_active.png"/>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" active-color="#ff5e7d">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" />
      <img slot="item-icon-action" src="~assets/img/tabbar/category_active.png"/>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" active-color="#ff5e7d">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" />
      <img slot="item-icon-action" src="~assets/img/tabbar/cart_active.png"/>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="#ff5e7d">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" />
      <img slot="item-icon-action" src="~assets/img/tabbar/profile_active.png"/>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </tab-bar>

</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>

</style>
