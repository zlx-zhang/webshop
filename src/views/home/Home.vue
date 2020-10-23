<template>
  <div>
    <!-- 导航栏 -->
    <!-- <nar-bar title="校园二手交易平台" /> -->
    <!-- 搜索框 -->
    <nar-bar class="header" />
    <!-- 轮播图 -->
    <swipe :images="imgs" />
    <!-- 页面导航 -->
    <feature-view />
    <!-- 商品列表 -->
    <!-- <list/> -->
    <div id="list">
      <van-grid :column-num="2">
        <van-grid-item v-for="(item, index) in goodsList" :key="index" @click="foo(item)">
          <van-image :src="item.gimage" />
          <span>{{ item.gname }}</span>
          <span>{{ item.gprice }}</span>
          <span>{{ item.gsprice }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="title">
      <span style="color: darkgray; font-size:13px;">我是有底线的！<img class="handimg" src="~assets/img/生气.png"></span>
    </div>

    <!-- 底部导航栏 -->
    <tab-bar :items="tabBar" @tabItemClick="tabItemClick" />
  </div>
</template>

<script>
// import NarBar from "components/common/narbar/NarBar";
import NarBar from "components/common/tabsearch/TabSearch";
import FeatureView from "components/common/featureview/FeatureView";
import Swipe from "components/common/swipe/Swipe";
// import List from "components/common/list/List";
import TabBar from "components/common/tabbar/TabBar";

import { apiGetGoods } from "network/user";
export default {
  data() {
    return {
      value: "",
      goodsList: [],
      imgs: [
        require("assets/img/01.jpg"),
        require("assets/img/02.jpg"),
        require("assets/img/03.jpg"),
        require("assets/img/04.jpg"),
      ],
      tabBar: [
        { path: "/home", icon: "home-o", title: "首页" },
        { path: "/cart", icon: "cart-o", title: "购物车" },
        { path: "/porfile", icon: "user-o", title: "我的" },
      ],
    };
  },
  components: {
    NarBar,
    FeatureView,
    TabBar,
    Swipe,
    // List
  },
  methods: {
    tabItemClick(item) {
      this.$router.push({
        path: item.path,
      });
    },
    onSearch(val) {
      this.$toast(val);
    },
    onCancel() {
      this.$toast("取消");
    },
    foo(item){
      this.$router.push({
        path:'/goods',
        query: {
          item
        }
      })
      // console.log(item)
    }
  },
  created() {
    apiGetGoods().then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        console.log(res);
        this.goodsList = res.data.goodsList;
      }
    });
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0.1px;
  z-index: 999;
}

#list{
  padding-bottom: 5%;
}
.handimg{
  width: 25px;
  
}
.title{
  width: 100%;
  height: 30px;
  padding-bottom: 15%;
  margin: 0 auto;
  text-align: center;
}
</style>
