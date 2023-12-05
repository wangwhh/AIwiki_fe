<template>
    <router-link to="/home">
        <img src="@/assets/pics/top_logo.png" class="logo" alt="AI百科全书">
    </router-link>
    <a-menu
            v-model:selectedKeys="selectedKeys1"
            mode="horizontal"
            :style="{ height: '100%', lineHeight: '50px', padding: '10px' }"
    >
        <router-link to="/home">
            <a-menu-item key="1">词条展示</a-menu-item>
        </router-link>
        <router-link to="/index">
            <a-sub-menu key="2">
                <template #title>
                  <span>
                    词条索引
                  </span>
                </template>
                <a-menu-item key="2-1">词典索引</a-menu-item>
                <a-menu-item key="2-2">分类索引</a-menu-item></a-sub-menu>
        </router-link>
        <router-link to="/tools">
            <a-menu-item key="3">工具集</a-menu-item>
        </router-link>
<!--        <router-link to="/tools">-->
            <a-menu-item key="4">AI问答</a-menu-item>
<!--        </router-link>-->
    </a-menu>
    <a-flex gap="large" align="center" horizotal class="head-right-bar">
        <a-input-search
                v-model:value="value"
                placeholder="请输入关键词"
                enter-button
                @search="onSearch"
                style="width: 300px; margin-right: 30px"
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