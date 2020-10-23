<template>
  <div class="container">
    <nar-bar title="商品详情" :isLeftArrow="true" />
    <div class="ptoto">
      <img class="img" :src="goods.gimage">
    </div>
    <div>
      <p>{{goods.gname}}</p>
      <p>{{goods.gprice}}</p>
      <p>{{goods.gsprice}}</p>
    </div>
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";

export default {
  data() {
    return {
      goods: {},
    };
  },
  components: {
    NarBar,
  },
  created() {
    // console.log(this.$route.query)
    this.goods = this.$route.query.item;
  },
  methods:{
  },
};
</script>

<style scoped>
  .img{
    width: 100%;
    height: 300px;
  }
</style>