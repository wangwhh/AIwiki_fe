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
            常用AI工具
          </span>
            </template>
            <a-menu-item key="1">AI写作工具</a-menu-item>
            <a-menu-item key="2">AI图片工具</a-menu-item>
            <a-menu-item key="3">AI视频工具</a-menu-item>
            
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #title>
          <span>
            AI对话问答
          </span>
            </template>
            <a-menu-item key="4">AI对话聊天</a-menu-item>
            <a-menu-item key="5">AI语言翻译</a-menu-item>
                    </a-sub-menu>
        <a-sub-menu key="sub3">
            <template #title>
          <span>
            AI学习网站
          </span>
            </template>
            <a-menu-item key="6">AI学习网站</a-menu-item>
            <a-menu-item key="7">AI模型框架</a-menu-item>
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