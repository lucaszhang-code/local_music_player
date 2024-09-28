<script setup>
import { reactive } from 'vue'
import ListLayout from '../components/ListLayout.vue'
const tableData = reactive([
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
  <ListLayout>
    <template #pageName>
      <h1>音乐</h1>
    </template>
    <template #ListCount>
      <h3>一共有{{tableData.length}}首音乐</h3>
    </template>
    <template #list>
      <el-table :data="tableData" style="width: 100%; height: 80vh">
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
  </ListLayout>
</template>

<style scoped>
.album-pic {
  height: 100%;
  border-radius: 5px;
}


</style>
