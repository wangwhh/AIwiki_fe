<template>
    <a-card title="有问题？" :bordered="false" style="width: 100%">
        <a-button :icon="h(EditOutlined) " @click="onEditClicked" class="my-button" >修改词条</a-button>
        <a-button :icon="h(PlusCircleOutlined)" class="my-button">添加词条</a-button>
        <a-button :icon="h(FormOutlined)" class="my-button">联系我们</a-button>
    </a-card>
</template>

<script>
import {EditOutlined, FormOutlined, PlusCircleOutlined} from "@ant-design/icons-vue";
import { h } from 'vue';
import router from "@/router";
export default {
    name: "Buttons",
    methods: {FormOutlined, h, PlusCircleOutlined, EditOutlined},

    setup() {
        function onEditClicked() {
            const id = router.currentRoute.value.query.id;
            let new_page = router.resolve({
                path:'/edit' ,
                query: {
                    id: id
                }
            });
            window.open(new_page.href, '_blank');
        }

        return {
            onEditClicked
        }
    }
}

</script>

<style scoped>
.my-button {
    width: 80%;
    margin: auto auto 10px auto;
    display: block;
}
</style>