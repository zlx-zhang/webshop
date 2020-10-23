<template>
  <div class="container">
    <!-- 导航栏 -->
    <nar-bar title="发布商品" :isLeftArrow="true" />
    <van-form class="body" @submit="onSubmit">
      <!-- 商品发布内容 -->
      <van-field
        v-model="gtitle"
        name="gtitle"
        label="宝贝标题："
        placeholder="好的标题更容易吸引买家"
        :rules="[{ required: true, message: '请填写商品标题' }]"
      />

      <!-- 上传图片 -->
      <van-field name="avatar" label="商品图片">
        <template #input>
          <van-uploader v-model="fileList" :max-count="1" upload-text="更改" :max-size="6000000" />
        </template>
      </van-field>

      <van-field
        v-model="gname"
        name="gname"
        label="商品名称："
        placeholder="商品名称"
        :rules="[{ required: true, message: '请填写商品名称' }]"
      />
      <van-field
        v-model="gprice"
        name="gprice"
        label="入手价格："
        placeholder="请填写宝贝的入手价格"
        :rules="[
          {
            required: true,
            message: '真实的入手价格可以帮助买家判断是否合适！',
          },
        ]"
      />
      <van-field
        v-model="gsprice"
        name="gsprice"
        label="宝贝价格："
        placeholder="请填写宝贝的价格"
        :rules="[{ required: true, message: '合理的价格更容易卖出哦！' }]"
      />
      <!-- 交易地点 -->
      <van-button round block type="info" native-type="submit" class="submit"
        >发布</van-button
      >
    </van-form>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";

import { apiUpgoods } from "network/user";
export default {
  data() {
    return {
      gtitle: "",
      gimage: "",
      gname: "",
      gprice: "",
      gsprice: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明s
      ],
    };
  },
  components: {
    NarBar,
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onSubmit(values) {
      console.log(values)
      apiUpgoods(values).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          this.$toast.success(res.data.msg);
          this.$router.go(-1);
        } else {
          this.$notify({
            type: "danger",
            message: res.data.msg,
            duration: 800,
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  line-height: 100px;
}
.body {
  margin-top: 10px;
}
.one {
  margin-left: 20%;
}
.photo {
  margin-left: 15px;
  font-size: 14px;
  color: rgb(100, 101, 102);
}
.submit {
  width: 200px;
  margin: 10% 0 0 25%;
}
</style>