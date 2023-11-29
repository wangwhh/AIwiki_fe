<template>
    <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRadius: '10px' }"
    >
        <a-sub-menu key="sub1">
            <template #title>
          <span>
            subnav 1
          </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #title>
          <span>
            subnav 2
          </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
            <template #title>
          <span>
            subnav 3
          </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script>
  import { ref } from 'vue';
  const selectedKeys2 = ref(['1']);
  const openKeys = ref(['sub1']);
  export default {
    name: 'Menu',
    setup() {
      return {
        selectedKeys2,
        openKeys,
      };
    },
  };
</script>
<style scoped>

.site-layout-background {
    background: #fff;
}


</style>