<template>
    <a-anchor
        :target-offset="targetOffset"
        :items=items
        @click="handleAnchorClick"
    ></a-anchor>
</template>

<script>
//TODO: highlight the anchor when the corresponding heading is in the viewport
import {inject, nextTick, onMounted, ref, watch} from 'vue';
export default {
    name: 'Anchor',
    setup() {
        let items = ref([]);
        const targetOffset = ref(undefined);
        const contentLoaded = inject('contentLoaded'); // 从父组件注入
        function handleAnchorClick(e, link) {
            e.preventDefault();
           const heading = document.querySelector(`[data-v-md-line="${link.href}"`);
           heading.scrollIntoView({
               behavior: 'smooth',
               block: 'center',
           });
        }

        function getTitles() {
            // console.log('getTitles')
            const anchors = ref(document.querySelectorAll('.entry-content h2, .entry-content h3'));
            // console.log(anchors.value);
            const titles = Array.from(anchors.value).filter((title) => !!title.innerText.trim());
            items.value = titles.map((title) => ({
                key: titles.indexOf(title),
                href: `${title.attributes[1].nodeValue}`,
                title: title.innerText,
            }));
        }

        watch(contentLoaded, async (newVal) => {
            if (newVal) {
                await nextTick(); // 等待DOM更新
                // 当内容加载完成时执行操作
                getTitles();
            }
        });
        onMounted(() => {
            window.addEventListener('resize', () => {
                targetOffset.value = window.innerHeight / 2;
            });
        });
        return {
            targetOffset,
            items,
            handleAnchorClick
        };
    },
};
</script>

<style scoped>

</style>