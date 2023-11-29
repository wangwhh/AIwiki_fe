<template>
    <a-layout>
        <a-layout-header class="layout-header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <div class="logo" />
            <a-menu
                    v-model:selectedKeys="selectedKeys1"
                    mode="horizontal"
                    :style="{ height: '100%', lineHeight: '50px', padding: '10px' }"
            >
                <a-menu-item key="1">nav 1</a-menu-item>
                <a-menu-item key="2">nav 2</a-menu-item>
                <a-menu-item key="3">
                  nav3
                </a-menu-item>
            </a-menu>
            <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 58 }">
                <template #icon>
                    <AntDesignOutlined />
                </template>
            </a-avatar>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" :style="{ position: 'fixed', height: '100%', margin: '80px 5px 0'}">
                <a-menu
                        v-model:selectedKeys="selectedKeys2"
                        v-model:openKeys="openKeys"
                        mode="inline"
                        :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-sub-menu key="sub1">
                        <template #title>
              <span>
                <user-outlined />
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
                <laptop-outlined />
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
                <notification-outlined />
                subnav 3
              </span>
                        </template>
                        <a-menu-item key="9">option9</a-menu-item>
                        <a-menu-item key="10">option10</a-menu-item>
                        <a-menu-item key="11">option11</a-menu-item>
                        <a-menu-item key="12">option12</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 2px 24px 24px; margin-left: 180px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content
                        :style="{ background: '#fff', padding: '24px', margin: '24px 16px 0' , overflow: 'initial' }"
                >
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
                        ...
                        <br />
                        Really
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        long
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        ...
                        <br />
                        content
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
  import { ref } from 'vue';
  import { AntDesignOutlined } from '@ant-design/icons-vue';
  const selectedKeys1 = ref(['2']);
  const selectedKeys2 = ref(['1']);
  const openKeys = ref(['sub1']);
  export default {
    name: 'Menu',
    components: {
      AntDesignOutlined,
    },
    setup() {
      return {
        selectedKeys1,
        selectedKeys2,
        openKeys,
      };
    },
  };
</script>
<style scoped>
.logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}
.layout-header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1)
}

.site-layout-background {
    background: #fff;
}
</style>