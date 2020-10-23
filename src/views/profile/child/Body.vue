<template>
  <div>
    <van-divider />
    <!-- 功能块 -->
    <div>
      <van-cell is-link @click="toOrder">我的订单</van-cell>
      <van-cell is-link @click="toUpgoods">发布商品</van-cell>
      <van-cell is-link @click="toFit">设置</van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // show: false,
    };
  },
  methods: {
    toOrder() {
      this.$router.push({
        path: "/order",
      });
    },
    toUpgoods() {
      this.$router.push({
        path: "/upgoods",
      });
    },
    toFit() {
      this.$router.push({
        path: "/fit",
      });
    },
    
  },
};
</script>

<style>
.title {
  margin: auto;
  text-align: center;
  padding-top: 50px;
}

.btn {
  width: 70%;
  margin-left: 15%;
  margin-top: 40px;
}
</style>