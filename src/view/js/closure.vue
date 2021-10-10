<template>
  <div>
    {{ info }}
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  setup() {
    let info = ref("");
<<<<<<< HEAD
    // 第1次
    // 第二次
=======
    // 第一次
    // 第2次
>>>>>>> js
    // 第三次
    // 第四次
    // 第五次
    // info.value = "信息";

    // 知识点：
    // 1.值传递（变量-栈），引用传递（函数-堆）
    // 2.函数作用域链（函数嵌套）
    // 3.返回值
    // 4.所有的函数都存在闭包
    // 5.垃圾回收机制（浏览器定时清理内容，存在引用关系函数不会被立即清理）
    // 6.函数生命周期（执行完成后），js的内容泄漏

    // 闭包的功能：
    // 1.在函数外，能访问函数内的值
    // 2.保持引用，不被垃圾回收

    // const action = (n, f) => {
    //   let head = "123";
    //   return () => {
    //     console.log(head);
    //   };
    // };

    // let acOut = action();
    // acOut();

    // 闭包：一个函数和它周围状态的引用捆绑在一起的的组合
    // const fn = () => {
    //   let total = 1;
    //   return () => {
    // 当前作用域a是自由变量，在定义周围环境向外作用域寻找，而非执行环境周围
    //     console.log(total);
    //   };
    // };

    // let total = 2;
    // let show = fn();
    // show();

    // const fn1 = () => {
    //   let total = 1;
    //   fn2();
    // };

    // let total = 2;
    // const fn2 = () => {
    //   // 自由变量会在函数定义的周围寻找
    //   console.log(total);
    // };
    // fn1();

    return {
      info,
    };
  },
};
</script>