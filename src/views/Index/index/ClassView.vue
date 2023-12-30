<template>
    <div class="index-body">
        <a-typography-title class="index-title">分类索引</a-typography-title>
<!--        <a-row>-->
            <div v-for="(group, category) in groupedEntries" class="index-content">
                <a-divider orientation="left">
                    {{category}}
                </a-divider>
                <a-flex wrap="wrap" gap="large">
                    <a-button v-for="entry in group" type="link" @click="onEntryClicked(entry)">
                        {{entry.title}}
                    </a-button>
                </a-flex>
            </div>
<!--        </a-row>-->
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import {fetchEntries} from "@/api";

export default {
    name: "ClassView",
    setup() {
        const groupedEntries = ref({});
        function onEntryClicked(entry) {
            let new_page = router.resolve({
                path:'/entry/' ,
                query: {
                    id: entry.id
                }
            });
            window.open(new_page.href, '_blank');
        }

        onMounted(async () => {
            const entries = await fetchEntries();

            const groups = {};
/***
 *    <a-menu-item key="understanding">一文读懂系列</a-menu-item>
            <a-menu-item key="news">前沿资讯</a-menu-item>
            <a-menu-item key="knowledge_map">学习路径</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="hot_entry">
            热门词条
        </a-menu-item>
        <a-menu-item key="recent_edit">
            最近修改
        </a-menu-item>
        <a-menu-item key="new_entry">
            最新词条
 */
            var map = {
                "understanding": "通俗易懂的教程",
                "news": "前沿资讯",
                "knowledge_map": "学习路径",
                "hot_entry": "热门词条",
                "recent_edit": "专业知识",
                "new_entry": "最新知识",
                "home": "精华文章"
            } 
            entries.forEach(entry => {
                let category = entry.category; // 获取首字母并转为大写
                if (!groups[map[category]]) {
                    groups[map[category]] = [];
                }
                groups[map[category]].push(entry);
            });
            groupedEntries.value = groups;
        });

        return {
            groupedEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.index-body {
    background: white;
    border-radius: 10px;
    width: calc(70vw - 100px);
    margin: 100px auto auto;
    padding: 10px;
}
.index-title {
    margin: 50px 0 0 70px;
}
.index-content {
    margin: 30px 70px 20px 70px;
}
</style>