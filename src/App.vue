<template>
    <a-layout>
        <a-layout-header class="layout-header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
            <TopBar/>
        </a-layout-header>
        <a-layout-content>
            <router-view/>
        </a-layout-content>
    </a-layout>

</template>

<script>

import {defineComponent} from "vue";
import TopBar from "@/components/TopBar.vue";

export default defineComponent({
    components: {TopBar}
})
</script>

<style scoped>
.layout-header {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1)
}
</style>