<template>
  <div>
    <!-- 导航栏 -->
    <nar-bar title="登录" :isLeftArrow="true" @clickRight="onClickRight" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="a">
      <span class="creg" @click="onClickRight()">还没有账号，<b style="color:red;">立即注册</b></span>
    </div>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
import { apiLogin } from "network/user";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  components: {
    NarBar,
  },
  methods: {
    onSubmit(values) {
      // console.log('submit', values);
      apiLogin(values).then((res) => {
        if (res.data.code === 200) {
          // 把用户信息存储在store中
          this.$store.commit("loginAfter", res);
          this.$toast.success("登陆成功");
          this.$router.go(-1);
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    onClickRight() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style>
.creg{
  font-size: 13px;
  margin-left: 10px;
}
</style>