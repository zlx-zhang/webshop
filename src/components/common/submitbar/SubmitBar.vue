<template>
  <div class="shopcar">
    <van-submit-bar
      class="submit"
      :price="0"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="AllChecked" @click="checkAll">全选</van-checkbox>
      <span
        class="management"
        v-if="managementShow"
        @click="management()"
      >管理</span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      managementShow:true
    };
  },
};
</script>

<style>
.submit {
  margin-bottom: 50px;
}
</style>