<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="1">
      <template v-slot:title>
        <i class="el-icon-location"></i>
        <span>Vue</span>
      </template>
      <el-menu-item-group>
        <template v-slot:title>全家桶</template>
        <el-menu-item index="vueCase">vue</el-menu-item>
        <el-menu-item index="vueRouter">vue router</el-menu-item>
        <el-menu-item index="vuex">vuex</el-menu-item>
        <el-menu-item index="vueCli">vue cli</el-menu-item>
        <el-menu-item index="axios">axios</el-menu-item>
        <el-menu-item index="js">js</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template v-slot:title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template v-slot:title>
        <span>导航二</span>
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <template v-slot:title>
        <span>导航三</span>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template v-slot:title>
        <span>导航四</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let defaultOpeneds = ref(["1", "1-4"]);

    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

    return { defaultOpeneds, handleOpen, handleClose };
  },
};
</script>