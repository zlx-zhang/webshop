<template>
  <div class="header">
    <van-search
      v-model="value"
      @click="hreftwo"
      shape="round"
      background="#4fc08d"
      placeholder="搜索你想要的商品"
    />
  </div>
</template>

<script>
export default {
  data() {
    return{
      value:''
    }
  },
  methods: {
    hreftwo() {
      this.$router.push({
        path: "/search",
      });
    },
  },
};
</script>

<style>
</style>