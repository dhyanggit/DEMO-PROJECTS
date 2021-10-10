<template>
  <div>
    <div class="tabClass">
      <router-link to="page1"> Page1</router-link>
      <router-link to="page2"> Page2</router-link>
      <router-link to="page3"> Page3</router-link>
    </div>
    <router-view class="tancontent"></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.tabClass {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  align-items: center;
  height: 100px;
  width: 100%;
  a {
    background-color: #ccc;
    width: 10%;
    line-height: 30px;
  }
  .tancontent {
    display: block;
  }
}
</style>