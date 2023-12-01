<template>
    <div class="logo" />
    <a-menu
            v-model:selectedKeys="selectedKeys1"
            mode="horizontal"
            :style="{ height: '100%', lineHeight: '50px', padding: '10px' }"
    >
        <router-link to="/home">
            <a-menu-item key="1">词条展示</a-menu-item>
        </router-link>
        <router-link to="/tools">
            <a-menu-item key="2">工具集</a-menu-item>
        </router-link>
    </a-menu>
    <a-flex gap="large" align="center" horizotal class="head-right-bar">
        <a-input-search
                v-model:value="value"
                placeholder="请输入关键词"
                enter-button
                @search="onSearch"
                style="width: 200px;"
        />
        <a-popover placement="bottom">
            <template #content>
                <p><a-button type="text">登录账号</a-button></p>
                <a-button type="text">注册账号</a-button>
            </template>
            <a-avatar :size="58">
                <template #icon>
                    <AntDesignOutlined />
                </template>
            </a-avatar>
        </a-popover>
    </a-flex>

</template>

<script>
import {AntDesignOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";
const value = ref('');
const selectedKeys1 = ref(['1']);

export default {
    name: "TopBar",
    components: {AntDesignOutlined},
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
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: #34A8FA4C;
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