<template>
  <div class="profile-hand">
    <div class="logo">
      <van-image
        round
        fit="cover"
        width="5rem"
        height="5rem"
        :src="info.avatar"
        @click="show = true"
      />
    </div>
    <!-- 编辑头像 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '15%' }">
      <div class="avator">
        <van-button class="avator-btn" type="default" @click="edit"
          >完善个人信息</van-button
        >
      </div>
    </van-popup>

    <!-- 登录按钮 -->
    <div v-show="!isLogin" class="login" @click="login">
      <span class="text">立即登录</span>
      <img src="~assets/img/arrow_right.svg" />
    </div>

    <div class="name">
      <p v-if="this.$store.state.admin">
        {{ this.$store.state.userInfo.nickname }}
      </p>
    </div>
    <!-- <p v-if="!this.$store.state.admin" class="name">{{ info.name }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      isLogin: false,
      show: false,
    };
  },
  methods: {
    login() {
      this.$router.push({
        path: "/login",
      });
    },
    edit() {
      this.$router.push({
        path: "/info",
      });
    },
  },
  mounted() {
    // console.log(this.$store.state.userInfo)
    if (this.$store.state.userInfo) {
      this.isLogin = true;
    }
  },
};
</script>

<style>
.avator-btn {
  width: 70%;
  margin-top: 20px;
  /* margin: auto; */
  margin-left: 15%;
}
/* .avator {

  } */
.logo,
.name {
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.login {
  position: fixed;
  top: 90px;
  right: 10px;
  cursor: pointer;
}
.login img {
  height: 30px;
  /* display:inline-block; */
  vertical-align: middle;
}
.text {
  height: 30px;
  /* display:inline-block; */
  vertical-align: middle;
}

.care {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.care-item {
  flex: 1;
  flex-direction: column-reverse;
  font-size: 12px;
}
</style>