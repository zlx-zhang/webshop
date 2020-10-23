<template>
  <div class="info">
    <nar-bar
      title="个人资料"
      :isLeftArrow="true"
    />
    <van-form @submit="onSubmit">
      <van-field name="avatar" label="头像" >
        <template #input>
          <van-uploader
            v-model="fileList"
            :max-count="1"
            upload-text="更改"
          />
        </template>
      </van-field>
      <van-field
        v-model="username"
        name="username"
        label="姓名"
        placeholder="姓名"
        @blur="BtnisUsername"
      />
      <van-field
        v-model="nickname"
        name="nickname"
        label="昵称"
        placeholder="昵称"
      />
      <van-field
        v-model="email"
        name="email"
        label="邮箱"
        placeholder="邮箱"
      />
      <van-field
        v-model="sex"
        name="sex"
        label="性别"
        placeholder="性别"
        
      />
      <van-field
        v-model="text"
        rows="2"
        autosize
        label="个性签名"
        name="text"
        type="textarea"
        maxlength="50"
        placeholder="个性签名"
        show-word-limit
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          保存资料
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
import { userInfoEdit } from "network/user";
export default {
  data() {
    return {
      avatar:'',
      username:'',
      nickname:'',
      email:'',
      sex:'',
      text:'',
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg"  }],
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      userInfoEdit(values,this.$store.state.userInfo.phone)
        .then((res) => {
          if (res.data.code === 200) {
            this.$router.go(0); // 刷新当前页面
            this.$toast.success(res.data.msg);
            this.isDisabled = true;
            this.rightText = "编辑";
          } else {
            this.$toast.fail(res.data.msg);
          }
        })
        .catch((error) => console.log(error));
    },
    // 判断用户名是否被注册
    BtnisUsername() {},
  },
  components: {
    NarBar,
  },
  created() {
    
  },
};
</script>

<style>
</style>