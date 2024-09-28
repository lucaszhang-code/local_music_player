<script setup>
import { reactive } from 'vue'
import ListLayout from '../components/ListLayout.vue'
import router from '../router'

const tableData = reactive([
  {
    id: 1,
    pic: '/src/assets/image/刻晴生日.jpg',
    artist: '周杰伦'
  },
  {
    id: 2,
    pic: '/src/assets/image/刻晴生日.jpg',
    artist: '朱爷'
  },
  {
    id: 3,
    pic: '/src/assets/image/刻晴生日.jpg',
    artist: '朱远威'
  }
])

const handleRowDblClick = (row) => {
  console.log(row.artist)
  router.push(`/artistDetail/${row.artist}`)
}
</script>

<template>
  <ListLayout>
    <template #pageName>
      <h1>艺术家</h1>
    </template>
    <template #ListCount>
      <h3>有{{ tableData.length }}个艺术家</h3>
    </template>
    <template #list>
      <el-table
        :data="tableData"
        style="width: 100%; height: 80vh"
        @row-dblclick="handleRowDblClick"
      >
        <el-table-column prop="pic" label="专辑封面">
          <template #default="scope">
            <img class="album-pic" :src="scope.row.pic" alt="" style="width: 50px; height: auto" />
          </template>
        </el-table-column>
        <el-table-column prop="artist" sortable label="艺术家" />
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
