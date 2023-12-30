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
            <a-menu-item key="AI聊天工具">AI聊天工具</a-menu-item>
            <a-menu-item key="AI绘画工具">AI绘画工具</a-menu-item>
            <a-menu-item key="AI视频工具">AI视频工具</a-menu-item>
            
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #title>
          <span>
            AI对话问答
          </span>
            </template>
            <a-menu-item key="AI聊天工具">AI聊天工具</a-menu-item>
            <a-menu-item key="AI写作工具">AI写作工具</a-menu-item>
                    </a-sub-menu>
        <a-sub-menu key="sub3">
            <template #title>
          <span>
            AI学习网站
          </span>
            </template>
            <a-menu-item key="热门工具">AI学习网站</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script>
import {inject, ref} from 'vue';
  export default {
    name: 'Menu',
    setup() {
      let selectedKeys2 = inject('selectedKeys2');
      let openKeys = inject("openKeys");
      console.log(selectedKeys2.value);
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