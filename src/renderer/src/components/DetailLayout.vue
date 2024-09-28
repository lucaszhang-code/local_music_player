<script setup>
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

const route = useRoute()
const artistName = ref(route.params.id)

const artistImg = ref('/src/assets/image/刻晴生日.jpg')
const data = reactive([
  {
    pic: '/src/assets/image/刻晴生日.jpg',
    name: '刻晴生日',
    artist: '周杰伦',
    album: '七里香',
    length: '03:30'
  }
])
</script>

<template>
  <div class="top-area">
    <slot name="artistImg"></slot>
<!--    <img :src="artistImg" alt="" />-->
    <div>
      <slot name="artistName"></slot>
      <slot name="count"></slot>
<!--      <h1>{{ artistName }}</h1>-->
<!--      <h3>?首作品</h3>-->
    </div>
  </div>
  <div class="table">
    <slot name="list"></slot>
<!--    <el-table :data="data" style="width: 100%; height: 60vh">-->
<!--      <el-table-column prop="pic" label="专辑封面">-->
<!--        <template #default="scope">-->
<!--          <img class="album-pic" :src="scope.row.pic" alt="" style="width: 50px; height: auto" />-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column prop="name" sortable label="名称" width="150" />-->
<!--      <el-table-column prop="artist" sortable label="艺术家" width="150" />-->
<!--      <el-table-column prop="album" sortable label="专辑名" width="100" />-->
<!--      <el-table-column prop="length" sortable label="时间" width="100" />-->
<!--    </el-table>-->
  </div>
</template>

<style scoped>
.top-area {
  display: flex;
  height: 200px;
  align-items: end;
  margin-bottom: 20px;

  img {
    clip-path: circle(50% at 50% 50%);
    height: 100%;
  }
}
</style>
