<template>
  <div class="profile">
    <!-- 导航栏 -->
    <nar-bar title="个人中心" />
    <!-- 头部 -->
    <Header :info="userInfo" />
    <!-- 中间 -->
    <Body />
    <!-- 底部导航栏 -->
    <tab-bar @tabItemClick="tabItemClick" />
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
import TabBar from "components/common/tabbar/TabBar";

import Header from "./child/header";
import Body from "./child/Body";
export default {
  data() {
    return {
      userInfo: {
        name: "游客，抓紧登陆吧",
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
      },
    };
  },
  components: {
    NarBar,
    TabBar,
    Header,
    Body,
  },
  methods: {
    tabItemClick(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
  created() {},
};
</script>

<style>
</style>