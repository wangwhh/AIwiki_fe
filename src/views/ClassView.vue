<template>
    <div class="index-body">
        <a-typography-title class="index-title">分类索引</a-typography-title>
<!--        <a-row>-->
            <div v-for="(group, category) in groupedEntries" class="index-content">
                <a-divider orientation="left">
                    {{category}}
                </a-divider>
                <a-flex wrap="wrap" gap="large">
                    <a-button v-for="entry in group" type="link">
                        {{entry.title}}
                    </a-button>
                </a-flex>
            </div>
<!--        </a-row>-->
    </div>
</template>

<script>
import {computed, ref} from "vue";
import entries_all from "@/assets/entries_all.js";
export default {
    name: "ClassView",
    setup() {
        // 将 entries_all 按首字母分类
        const groupedEntries = computed(() => {
            const groups = {};
            entries_all.value.forEach(entry => {
                let category = entry.category; // 获取首字母并转为大写
                if (!groups[category]) {
                    groups[category] = [];
                }
                groups[category].push(entry);
            });
            return groups;
        });

        return {
            groupedEntries
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