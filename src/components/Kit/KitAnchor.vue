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
    name: 'KitAnchor',
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