<template>
    <a-table
            :columns="columns"
            :data-source="data"
            :pagination="{ pageSize: 20 }"
            :scroll="{ y: '70vh' }"
            class="table"
    >
        <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'operation'">
                <a-button @click="preview(record)">
                    <template #icon>
                        <EyeOutlined />
                    </template>
                </a-button>

                <a-popconfirm
                    v-if="data.length"
                    title="确认通过?"
                    @confirm="passContrib(record)"
                >
                    <a-button>
                        <template #icon>
                            <CheckOutlined />
                        </template>
                    </a-button>
                </a-popconfirm>

                <a-popconfirm
                        v-if="data.length"
                        title="确认驳回?"
                        @confirm="rejectContrib(record)"
                >
                    <a-button>
                        <template #icon>
                            <CloseOutlined />
                        </template>
                    </a-button>
                </a-popconfirm>
            </template>
        </template>
    </a-table>

    <a-modal v-model:open="previewOpen" width="1000px" title="预览词条" @ok="textOpen = false" :footer="null">
        <v-md-preview :text="previewText.slice(0, 450) + '...'"  style="height:600px"></v-md-preview>
    </a-modal>
</template>

<script>
import api from "@/api/api";
import openNotification from "@/components/notification";
import router from "@/router";
import {onMounted, ref} from "vue";
import {EyeOutlined, CheckOutlined, CloseOutlined} from "@ant-design/icons-vue";

export default {
    name: "ContribView",
    components:{EyeOutlined, CheckOutlined, CloseOutlined},
    setup() {
        const edit_visible = ref(false);
        const insert_visible = ref(false);
        const textOpen = ref(false);
        const text = ref('');
        const previewOpen = ref(false);
        const previewText = ref('');
        const edit_form = ref({
            id: '',
            title: '',
            content: '',
            description: '',
            category: '',
        });
        const insert_form = ref({
            title: '',
            content: '',
            description: '',
            category: '',
        });

        const columns = [
            {
                title: '编号',
                dataIndex: 'ecid',
                width: 60,
            },
            {
                title: '提交用户uid',
                dataIndex: 'uid',
                width: 80,
            },
            {
                title: '词条id',
                dataIndex: 'eid',
                width: 100,
            },
            {
                title: '标题',
                dataIndex: 'title',
                width: 200,
            },
            {
                title: '内容',
                dataIndex: 'content',
                width: 200,
                ellipsis: true,
            },
            {
                title: '简介',
                dataIndex: 'description',
            },
            {
                title: '分类',
                dataIndex: 'category',
                width: 100,
            },
            {
                title: '提交时间',
                dataIndex: 'submitTime',
                width: 200,
            },
            {
                title: '状态',
                dataIndex: 'status',
                width: 100,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width: 150,
            },
        ];

        const data = ref([]);

        async function preview(record) {
            previewOpen.value = true;
            previewText.value =  record.content;
        }

        async function fetchRecord() {
            await api.get('/queryEntrySubmission').then((res) => {
                if (res.data.code === 20000) {
                    data.value = res.data.data.entrySubmissions;
                } else {
                    openNotification('error','获取专题信息失败', '请稍后再试')
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }

        async function passContrib(record) {
            await api.post('/reviewEntrySubmission', {
                "esid": record.esid,
                "status": "通过",
                "comment": ""
            }).then((res) => {
                if (res.data.code === 20000) {
                    openNotification('success','审核成功', '请刷新页面')
                } else {
                    openNotification('error','审核失败', res.data.msg)
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })

        }

        async function rejectContrib(record) {
            await api.post('/reviewEntrySubmission', {
                "esid": record.esid,
                "status": "驳回",
                "comment": "审核不通过"
            }).then((res) => {
                if (res.data.code === 20000) {
                    openNotification('success','审核成功', '请刷新页面')
                } else {
                    openNotification('error','审核失败', res.data.msg)
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }

        onMounted(async () => {
            await fetchRecord();
        })


        return {
            columns, data, edit_visible, insert_visible, edit_form, insert_form,
            text, textOpen, preview, previewOpen, previewText, passContrib, rejectContrib
        }

    }
}
</script>

<style scoped>

</style>