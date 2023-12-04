<template>
    <div v-for="tool_set in ToolsEntries">
        <a-divider orientation="left" style="font-size: 20px">{{tool_set.type}}</a-divider>
        <a-flex wrap="wrap" gap="large">
<!--            TODO: 在这里加一个popover显示工具的 description-->
            <a-card v-for="kit in tool_set.tools" hoverable class="cardStyle" :body-style="{ padding: 0, overflow: 'initial' }">
                <a-flex justify="space-between">
                    <img
                        alt="avatar"
                        :src=kit.img_src
                        class="imgStyle"
                    />
                    <a-flex vertical align="flex-end" justify="space-between" :style="{ padding: '10px' }">
                        <a-typography>
                            <a-typography-title align="center" :level="4">
                                {{kit.title}}
                            </a-typography-title>
                        </a-typography>
                        <a-button type="primary" @click="onEntryClicked(kit)" target="_blank">跳转</a-button>
                    </a-flex>
                </a-flex>
            </a-card>
        </a-flex>
    </div>

</template>

<script>
import {ref} from "vue";
import router from "@/router";

export default {
    name: "ToolsEntries",
    setup() {
        let ToolsEntries = ref([{
            type: '热门工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/chatgpt.png",
                id: 1,
                title: "ChatGPT",
                href: 'https://chat.openai.com/'
            }, {
                img_src: "src/assets/pics/toolPics/stability-ai-icon.png",
                id: 2,
                title: "Stable Diffusion XL",
                href: 'https://clipdrop.co/stable-diffusion'
            }, {
                img_src: "src/assets/pics/toolPics/github-copilot-icon.png",
                id: 7,
                title: "GitHub Copilot",
                href: 'https://copilot.github.com/'
            }]
        }, {
            type: 'AI聊天工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/chatgpt.png",
                id: 1,
                title: "ChatGPT",
                href: 'https://chat.openai.com/'
            }, {
                img_src: "src/assets/pics/toolPics/baidu-yiyan-icon.png",
                id: 3,
                title: "文心一言",
                href: 'https://yiyan.baidu.com/'
            }]
        }, {
            type: 'AI图像工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/stability-ai-icon.png",
                id: 2,
                title: "Stable Diffusion XL",
                href: 'https://clipdrop.co/stable-diffusion'
            }, {
                img_src: "src/assets/pics/toolPics/new-bing-icon.png",
                id: 5,
                title: "Bing Image Creator",
                href: 'https://cn.bing.com/images/create'
            }]
        }, {
            type: 'AI编程工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/github-copilot-icon.png",
                id: 7,
                title: "GitHub Copilot",
                href: 'https://copilot.github.com/'
            }]
        }, {
            type: 'AI文本工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/notion-ai-icon.png",
                id: 4,
                title: "Notion AI",
                href: 'https://www.notion.so/Notion-AI'
            }]
        }, {
            type: 'AI视频工具',
            tools: [{
                img_src: "src/assets/pics/toolPics/aigc-yizhentv-icon.png",
                id: 4,
                title: "一秒创帧",
                href: 'https://www.notion.so/Notion-AI'
            }]
        }, {
            type: 'AI音频工具',
            tools: []
        }, {
            type: 'AI其他工具',
            tools: []
        }]);


        function onEntryClicked(kit) {
            let new_page = router.resolve({
                path:'/kit/' ,
                query: {
                    id: kit.id
                }

            });
            // window.open(new_page.href, '_blank');
            window.open(kit.href, '_blank');
        }


        return {
            ToolsEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.cardStyle  {
    width: calc(33% - 20px);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
}
.imgStyle {
    display: block;
    height: 100px;
}

</style>