<template>
    <a-layout>
        <a-layout-sider class="entry-sider">
            <Anchor/>
        </a-layout-sider>
        <a-layout>
            <a-layout-content>
                <EntryContent class="entry-content" @content-loaded="setContentLoaded"/>
            </a-layout-content>
            <a-layout-sider class="entry-right-sider">
                <Relations/>
                <Buttons class="buttons"/>
            </a-layout-sider>
        </a-layout>
    </a-layout>
    <a-float-button-group shape="square" :style="{ left: '24px' }">
        <a-float-button @click="switchLikeStatus" :type="likeStatus">
            <template #icon>
                <LikeOutlined />
            </template>
        </a-float-button>

        <a-float-button @click="switchStarStatus" :type="starStatus">
            <template #icon>
                <StarOutlined />
            </template>
        </a-float-button>
    </a-float-button-group>

</template>

<script>
import router from "@/router";
import {onMounted, provide, ref, watchEffect} from "vue";
import EntryContent from "@/views/Entry/components/EntryContent.vue";
import Anchor from "@/views/Entry/components/Anchor.vue";
import Relations from "@/views/Entry/components/Relations.vue";
import Buttons from "@/views/Entry/components/Buttons.vue";
import {CheckCircleOutlined, LikeOutlined, StarOutlined} from "@ant-design/icons-vue";

export default {
    name: "EntryView",
    components: {Buttons, Relations, EntryContent, Anchor, CheckCircleOutlined, LikeOutlined, StarOutlined},
    setup() {
        const starStatus = ref("");
        const likeStatus = ref("");
        function switchStarStatus() {
            if (starStatus.value === "primary") {
                starStatus.value = "";
            } else {
                starStatus.value = "primary";
            }
        }
        function switchLikeStatus() {
            if (likeStatus.value === "primary") {
                likeStatus.value = "";
            } else {
                likeStatus.value = "primary";
            }
        }
        const contentLoaded = ref(false); // 新增状态
        const setContentLoaded = () => {
            contentLoaded.value = true;
        };
        provide('contentLoaded', contentLoaded); // 向子组件提供状态
        return {
            contentLoaded,
            setContentLoaded,
            switchStarStatus,
            switchLikeStatus,
            starStatus,
            likeStatus
        }
    },
}
</script>

<style scoped>
.entry-content {
    margin: 100px 300px 20px 320px;
    overflow: initial;
}
.entry-sider {
    max-width: 270px !important;
    width : 270px !important;
    margin: 100px 0 10px 20px;
    background: white;
    border-radius: 10px;
    padding: 20px 20px 20px 10px;
    position: fixed;
    overflow: auto ;
    height: calc(100vh - 120px);
}

.entry-right-sider {
    min-width: 270px !important;
    max-width: 300px !important;
    width: 270px !important;
    position: fixed;
    right: 0;
    margin: 100px 10px 16px 0;
    background: rgba(255, 255, 255, 0);
    border-radius: 10px;
}
.buttons {
    margin: 20px 0 0 0;
}
</style>