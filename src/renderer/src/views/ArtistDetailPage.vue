<script setup>
import { useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import DetailLayout from '../components/DetailLayout.vue'

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
  <DetailLayout>
    <template #artistImg>
      <img class="artistImg" :src="artistImg" alt="" />
    </template>
    <template #artistName>
      <h1>{{ artistName }}</h1>
    </template>
    <template #count>
      <h3>{{data.length}}首作品</h3>
    </template>
    <template #list>
      <el-table :data="data" style="width: 100%; height: 60vh">
        <el-table-column prop="pic" label="专辑封面">
          <template #default="scope">
            <img class="album-pic" :src="scope.row.pic" alt="" style="width: 50px; height: auto" />
          </template>
        </el-table-column>
        <el-table-column prop="name" sortable label="名称" width="150" />
        <el-table-column prop="artist" sortable label="艺术家" width="150" />
        <el-table-column prop="album" sortable label="专辑名" width="100" />
        <el-table-column prop="length" sortable label="时间" width="100" />
      </el-table>
    </template>
  </DetailLayout>
</template>

<style scoped>
img{
  border-radius:5px;
}

.artistImg {
  clip-path: circle(50% at 50% 50%);
  height: 100%;
}
</style>
