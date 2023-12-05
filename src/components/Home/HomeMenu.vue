<!--HomeMenu.vue-->
<template>
    <a-menu
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :style="{ height: '100%', borderRadius: '10px' }"
    >
        <a-menu-item key="home">
            首页
        </a-menu-item>
        <a-sub-menu key="topics">
            <template #title>
              <span>
                特色专题
              </span>
            </template>
            <a-menu-item key="understanding">一文读懂系列</a-menu-item>
            <a-menu-item key="news">前沿资讯</a-menu-item>
            <a-menu-item key="knowledge_map">知识图谱</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="hot_entry">
            热门词条
        </a-menu-item>
        <a-menu-item key="recent_edit">
            最近修改
        </a-menu-item>
        <a-menu-item key="new_entry">
            最新词条
        </a-menu-item>
    </a-menu>
</template>
<script>
import {inject, ref} from 'vue';
  export default {
    name: 'HomeMenu',
    setup() {
      let selectedKeys = inject('selectedKeys');
      console.log(selectedKeys.value);
      return {
        selectedKeys,
        // openKeys,
      };
    },
  };
</script>
<style scoped>

.site-layout-background {
    background: #fff;
}


</style>