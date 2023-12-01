<template>
    <a-anchor
            :target-offset="targetOffset"
            :items=items
    ></a-anchor>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    name: 'Anchor',
    setup() {
        const anchors = this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
        const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
        const items = [
            {
                key: '1',
                href: '#components-anchor-demo-basic',
                title: 'Basic demo',
            },
            {
                key: '2',
                href: '#components-anchor-demo-static',
                title: 'Static demo',
            },
            {
                key: '3',
                href: '#api',
                title: 'API',
                children: [
                    {
                        key: '4',
                        href: '#anchor-props',
                        title: 'Anchor Props',
                    },
                    {
                        key: '5',
                        href: '#link-props',
                        title: 'Link Props',
                    },
                ],
            },
        ]
        const targetOffset = ref(undefined);
        onMounted(() => {
            targetOffset.value = window.innerHeight / 2;
        });
        return {
            targetOffset,
            items
        };
    },
};
</script>

<style scoped>
.content-anchor {
    position: fixed;
    margin: 100px 100px 0 0;
}
</style>