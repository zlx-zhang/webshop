<template>
  <div>
    <!-- vant搜索 -->
    <van-search
      @input="showSearch"
      @search="onSearch"
      autofocus
      show-action
      shape="round"
      v-model="kw"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <van-icon
          @click="back"
          style="margin-right: 5px"
          size="22px"
          name="arrow-left"
        />
      </template>

      <template #action>
        <van-button
          @click="onSearch"
          size="small"
          type="danger"
          style="border-radius: 5px; font-size: 14px"
          >搜索</van-button
        >
      </template>
    </van-search>

    <!-- 搜索记录 -->
    <div v-show="isShow">
      <div style="display: flex; justify-content: space-between; padding: 5px">
        <div>搜索记录：</div>

        <div>
          <van-icon @click="onDel" size="18px" name="delete" />
        </div>
      </div>

      <div>
        <van-tag
          style="margin: 5px"
          v-for="(item, index) in saveList"
          :key="(item, index)"
          >{{ item }}</van-tag
        >
      </div>
    </div>

    <!-- 搜索提示 -->
    <van-cell-group v-show="!isShow">
      <van-cell
        v-for="(item, index) in showList"
        :title="item.dtitle"
        :key="(item, index)"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kw: "",
      isShow: true,
      list: [], //所有数据
      saveList: [], //搜索记录的数据
      showList: [], //搜索提示的数据
    };
  },
  created() {
    let saveList = localStorage.saveList;
    if (saveList) {
      this.saveList = JSON.parse(saveList);
    }
  },
  // mounted() {
  //   this.$axios.get(" http://api.kudesoft.cn/tdk/goods").then((res) => {
  //     // console.log(res.data.data.data.list)
  //     this.list = res.data.data.data.list;
  //   });
  // },
  methods: {
    back() {
      //返回上一级
      window.history.back();
    },
    onSearch(val) {
      //点击enter和点击搜索时触发

      if (val.trim() == "") {
        //如果搜索的值为空则不会跳转
        return;
      }

      this.$router.push({
        //点击跳转到列表页，并把输入的值传过去
        path: "/list",
        query: {
          kw: val,
        },
      });

      if (!this.saveList.includes(val.trim())) {
        //判断是否重复添加相同记录
        this.saveList.push(val); //把搜索的值添加到搜索记录
        localStorage.saveList = JSON.stringify(this.saveList);
      }
    },
    showSearch() {
      //输入框内容发生变化时触发
      this.showList = [];

      this.list.map((item) => {
        if (item.dtitle.includes(this.kw)) {
          this.showList.push(item);
        }
      });

      if (this.kw.trim() == "") {
        //判断显示或隐藏搜索提示
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    onDel() {
      //删除
      this.$dialog
        .confirm({
          title: "确定要清空搜索记录吗",
        })
        .then(() => {
          this.saveList = [];
          localStorage.saveList = JSON.stringify(this.saveList);
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style>
</style>