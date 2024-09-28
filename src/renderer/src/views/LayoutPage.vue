<script setup>
import { Location, User, Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main">
    <div class="nav">
      <h1 style="text-align: center; margin-bottom: 8%">MyPlayer</h1>
      <el-menu default-active="songList" class="el-menu-vertical-demo" router>
        <el-menu-item index="/music">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>音乐</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/artist">
          <template #title>
            <el-icon><User /></el-icon>
            <span>艺术家</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/album">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>专辑</span>
          </template>
        </el-menu-item>

        <el-menu-item index="/search">
          <template #title>
            <el-icon><Search /></el-icon>
            <span>搜索</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="page">
      <transition name="slide-fade">
        <RouterView></RouterView>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.nav {
  width: 25%;
  height: 100vh;
}

.el-menu-item {
  border-radius: 50px;

  .el-menu-item span {
    text-align: center;
  }
}

.el-menu-item.is-active {
  background-color: skyblue;
  border-radius: 50px;
  color: black;
  transition: all 0.2s;
  animation: btn-active 0.2s forwards;
}

@keyframes btn-active {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.el-menu-item:hover {
  border-radius: 50px;
}

.page {
  scale: 0.95;
  width: 75%;
  height: 100vh;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(5%);
  opacity: 0;
}
</style>
