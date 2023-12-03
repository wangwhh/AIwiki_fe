<template>
    <a-anchor
        :target-offset="targetOffset"
        :items=items
        @click="handleAnchorClick"
    ></a-anchor>
</template>

<script>
//TODO: highlight the anchor when the corresponding heading is in the viewport
import { onMounted, ref } from 'vue';
export default {
    name: 'Anchor',
    setup() {
        let items = ref([]);
        const targetOffset = ref(undefined);
        function handleAnchorClick(e, link) {
            e.preventDefault();

           const heading = document.querySelector(`[data-v-md-line="${link.href}"`);
           heading.scrollIntoView({
               behavior: 'smooth',
               block: 'center',
           });
        }

        function getTitles() {
            const anchors = document.querySelectorAll('h2,h3');
            const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
            items.value = titles.map((title) => ({
                key: titles.indexOf(title),
                href: `${title.attributes[1].nodeValue}`,
                title: title.innerText,
            }));
            console.log(items.value);
        }


        onMounted(() => {
            getTitles();
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