<template>
  <div class="fit">
    <nar-bar title="设置" :isLeftArrow="true" />
    <van-cell is-link @click="toPersonal">个人信息</van-cell>

    <!-- 注册 -->
    <div>
      <van-cell is-link @click="showPopup">注销</van-cell>
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <h3 class="title">是否确认注销</h3>
        <van-button @click="exitBtn" class="btn" type="primary"
          >确定注销</van-button
        >
      </van-popup>
    </div>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
export default {
  data() {
    return {
      users: {},
      show:false
    };
  },
  components: {
    NarBar,
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    exitBtn() {
      this.$store.commit("exit");
      this.$router.go(0);
    },
  }
};
</script>

<style>
</style>