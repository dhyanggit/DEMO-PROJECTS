<template>
  <h1>{{ msg }}</h1>
  <h2>{{ obj.name }}</h2>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { defineProps, reactive } from "vue";

export default {
  name: "tes",
  props: {
    msg: {
      type: String,
      required: true,
    },
    obj: {
      type: Object,
      reactive,
    },
  },
  setup() {
    const state = reactive({ count: 0 });
    // console.log(msg);
    return {
      state,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
