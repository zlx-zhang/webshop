<template>
  <div>
    <nar-bar title="购物车" />
    <div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <!-- 商品的结算按钮 -->
    <submit-bar />
    <!-- 底部导航栏 -->
    <tab-bar @tabItemClick="tabItemClick" />
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
import SubmitBar from "components/common/submitbar/SubmitBar";
import TabBar from "components/common/tabbar/TabBar";
export default {
  data() {
    return {};
  },
  components: {
    NarBar,
    SubmitBar,
    TabBar,
  },
  methods: {
    tabItemClick(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>

<style scoped>
</style>