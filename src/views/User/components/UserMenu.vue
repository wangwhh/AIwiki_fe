<!--个人信息-->
<!--个性选择-->
<!--贡献记录-->
<!--词条收藏-->
<!--userinfo已实现，usermenu可以删除-->
<template>
    <a-menu
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :style="{ height: '100%', borderRadius: '10px' }"
    >
        <router-link to="/">
            <a-menu-item>
                个人信息
            </a-menu-item>
        </router-link>

        <a-menu-item key="2">
            个性选择
        </a-menu-item>
        <a-menu-item key="3">
            贡献记录
        </a-menu-item>
        <a-menu-item key="4">
            词条收藏
        </a-menu-item>
    </a-menu>
</template>
<script>
import {inject, ref} from 'vue';
  export default {
    name: 'UserMenu',
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