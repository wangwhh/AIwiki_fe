<template>
    <router-link to="/home">
        <img src="../assets/pics/top_logo.png" class="logo" alt="AI百科全书">
    </router-link>
    <a-menu
            v-model:selectedKeys="selectedKeys1"
            mode="horizontal"
            :style="{ height: '100%', lineHeight: '50px', padding: '10px' }"
    >
        <router-link to="/home">
            <a-menu-item key="1">词条展示</a-menu-item>
        </router-link>

        <a-sub-menu key="2">
            <template #title>
              <span>
                词条索引
              </span>
            </template>
            <router-link to="/index/dict">
                <a-menu-item key="2-1">词典索引</a-menu-item>
            </router-link>
            <router-link to="/index/class">
                <a-menu-item key="2-2">分类索引</a-menu-item>
            </router-link>
        </a-sub-menu>
        <router-link to="/tools">
            <a-menu-item key="3">工具集</a-menu-item>
        </router-link>
       <router-link to="/chat">
            <a-menu-item key="4">AI问答</a-menu-item>
       </router-link>
    </a-menu>
    <a-flex gap="large" align="center" horizotal class="head-right-bar">
        <a-input-search
                v-model:value="value"
                placeholder="请输入关键词"
                enter-button
                @search="onSearch"
                style="width: 300px; margin-right: 30px"
        />
        <TopAvatar/>
    </a-flex>

</template>

<script>
import {AntDesignOutlined} from "@ant-design/icons-vue";
import {inject, ref} from "vue";
import TopAvatar from "@/components/TopAvatar.vue";
const value = ref('');
const selectedKeys1 = ref(['1']);

export default {
    name: "TopBar",
    components: {TopAvatar, AntDesignOutlined},
    setup() {
        function onSearch(value) {
            console.log(value);
        }
        return {
            selectedKeys1,
            value,
            onSearch
        };
    },
}
</script>

<style scoped>
.logo {
    float: left;
    height: 50px;
    margin: 16px 24px 16px 0;
}
.head-right-bar {
    position: absolute;
    right: 50px;
}
.ant-popover-inner{
    width: 100px;
    text-align: center;
}

</style>