<!--HomeView.vue-->
<template>
    <a-layout>
        <a-layout-sider class="sider-menu" >
          <HomeMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="home-content">
                <Topics/>
            </a-layout-content>
            <a-layout-sider class="right-bar">
                <a-flex gap="middle" vertical>
                    <GoodEntry/>
                    <RecTools/>
                </a-flex>
            </a-layout-sider>
        </a-layout>

    </a-layout>
</template>

<script>
import HomeMenu from "@/views/Home/components/HomeMenu.vue";
import GoodEntry from "@/views/Home/components/GoodEntry.vue";
import RecTools from "@/views/Home/components/RecTools.vue";
import {provide, ref} from "vue";
import Topics from "@/views/Home/components/Topics.vue";

export default {
    name: "HomeView",
    components: {Topics, RecTools, GoodEntry, HomeMenu},

    setup() {
        let selectedKeys = ref(['home']);
        provide('selectedKeys', selectedKeys); // 向子组件提供状态
        return {
            selectedKeys,
        };
    },

}
</script>

<style scoped>
.sider-menu {
    height: 100%;
    width: 230px !important;
    max-width: 300px !important;
    margin: 100px 0 10px 20px;
    border-radius: 10px;
    background-color: white;
    position: fixed;
}

.home-content {
    /*background: #fff;*/
    /*margin-top: 72px;*/
    margin: 100px 340px 16px 270px;
    overflow: initial ;
    /*border-radius: 10px;*/
    text-align: center;
    /*padding: 24px;*/
}

.right-bar {
    min-width: 300px !important;
    max-width: 300px !important;
    width: 300px !important;
    position: fixed;
    right: 0;
    margin: 100px 20px 16px 0;
}

.ant-layout-header {
    background: white;

}
.ant-layout-sider {
    background: #FFFFFF00;
}

</style>