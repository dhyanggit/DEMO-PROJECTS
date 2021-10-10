<template>
  <el-container class="frame">
    <el-aside width="200px"> <myMenu></myMenu> </el-aside>
    <el-container class="right">
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import myMenu from "../components/mymenu.vue";
</script>

<style  lang="scss">
@import "styles/index.scss";
</style>