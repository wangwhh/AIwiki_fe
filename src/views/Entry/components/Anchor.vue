<template>
    <a-anchor
        :items=items
        :offset-top="100"
    ></a-anchor>
</template>

<script>
import {inject, nextTick, onMounted, ref, watch} from 'vue';


export default {
    name: 'Anchor',
    setup() {
        let items = ref([]);
        const contentLoaded = inject('contentLoaded'); // 从父组件注入

        function getTitles() {
            // console.log('getTitles')
            const anchors = ref(document.querySelectorAll('.entry-content h2, .entry-content h3'));
            console.log(anchors.value);
            const titles = Array.from(anchors.value).filter((title) => !!title.innerText.trim());
            console.log(titles)
            for(let i = 0; i < titles.length; i++) {
                const level = titles[i];
                const key = i;
                const text = level.innerText;
                const href = level.attributes[1].nodeValue;

                level.setAttribute("id", `${href}`);

                let children=[];
                if(level.tagName === 'H2') {
                    let j = i + 1;
                    for(j = i + 1; j < titles.length; j++) {
                        let child_level = titles[j];
                        let child_key = j;
                        let child_text = child_level.innerText;
                        let child_href = child_level.attributes[1].nodeValue;
                        child_level.setAttribute("id", `${child_href}`);
                        if(titles[j].tagName === 'H3') {
                            children.push({
                                key: child_key,
                                title: child_text,
                                href: '#' + child_href,
                            });
                        } else {
                            break;
                        }
                    }
                    i = j-1;
                }
                const item = {
                    key: key,
                    title: text,
                    href: '#' + href,
                    children: children,
                };
                items.value.push(item);
                console.log(item)
            }
        }

        watch(contentLoaded, async (newVal) => {
            if (newVal) {
                await nextTick(); // 等待DOM更新
                // 当内容加载完成时执行操作
                getTitles();
            }
        });
        onMounted(() => {

        });
        return {
            items,
        };
    },
};
</script>

<style scoped>

</style>