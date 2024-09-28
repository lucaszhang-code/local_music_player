<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import ListLayout from '../components/ListLayout.vue'

let content = ref('')
</script>

<template>
  <ListLayout>
    <template #pageName>
      <div class="search">
        <el-input v-model="content" style="width: 240px; margin-right: 10px" placeholder="搜索">
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
        <el-button>搜索</el-button>
      </div>
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
.search {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
