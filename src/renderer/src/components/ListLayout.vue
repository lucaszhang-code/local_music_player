<script setup>
// import { ArrowDown, Histogram } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main">
    <div class="control-top">
      <div class="title">
        <slot name="pageName"></slot>
        <slot name="ListCount"></slot>
      </div>
    </div>

    <div class="list">
     <slot name="list"></slot>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  flex-direction: column;

  .control-top {
    width: 75vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      position: relative;
      width: 100%;
      left: 5%;
    }
  }

  .list {
    border-radius: 10px;
    width: 90%;
    height: 100%;


  }
}
</style>
