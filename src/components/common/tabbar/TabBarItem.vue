<template>
<div class="tab-bar-item" @click="itemClick">

  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>

</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return{
      isActive:false
    }
  },
  computed:{
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick: function () {
      console.log(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
}

.tab-bar-item img{
height: 24px;
}
</style>
