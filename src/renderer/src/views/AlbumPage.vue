<script setup>
import { reactive } from 'vue'
import ListLayout from '../components/ListLayout.vue'

const tableData = reactive([
  {
    pic: '/src/assets/image/刻晴生日.jpg',
    album: '周杰伦'
  }
])
</script>

<template>
  <ListLayout>
    <template #pageName>
      <h1>专辑</h1>
    </template>
    <template #ListCount>
      <h3>有?张专辑</h3>
    </template>
    <template #list>
      <el-table :data="tableData" style="width: 100%; height: 80vh">
        <el-table-column prop="pic" label="专辑封面">
          <template #default="scope">
            <img class="album-pic" :src="scope.row.pic" alt="" style="width: 50px; height: auto" />
          </template>
        </el-table-column>
        <el-table-column prop="album" sortable label="专辑" />
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
