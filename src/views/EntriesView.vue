<template>
    <a-button style="margin: 10px" @click="insert_visible = true">添加词条</a-button>
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

                <a-button @click="onEdit(record)">
                    <template #icon>
                        <EditOutlined />
                    </template>
                </a-button>

                <a-popconfirm
                    v-if="data.length"
                    title="确认删除?"
                    @confirm="onDelete(record)"
                >
                    <a-button>
                        <template #icon>
                            <DeleteOutlined />
                        </template>
                    </a-button>
                </a-popconfirm>
            </template>
        </template>
    </a-table>


    <a-modal v-model:open="edit_visible" title="修改词条信息" @ok="editOk">
        <a-form>
            <a-form-item label="词条名">
                <a-input v-model:value="edit_form.title" />
            </a-form-item>
            <a-form-item label="词条简介">
                <a-input v-model:value="edit_form.description" />
            </a-form-item>
            <a-form-item label="词条分类">
                <a-select v-model:value="edit_form.category" >
                    <a-select-option value="home">首页</a-select-option>
                    <a-select-option value="understanding">一文读懂系列</a-select-option>
                    <a-select-option value="news">前沿资讯</a-select-option>
                    <a-select-option value="knowledge_map">学习路径</a-select-option>
                    <a-select-option value="hot_entry">热门词条</a-select-option>
                    <a-select-option value="recent_edit">最近修改</a-select-option>
                    <a-select-option value="new_entry">最新词条</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onEditText(true)">编辑内容</a-button>
            </a-form-item>
        </a-form>
    </a-modal>

    <a-modal v-model:open="insert_visible" @ok="insertOk">
        <template #title>
            添加词条
        </template>
        <a-form>
            <a-form-item label="词条名">
                <a-input v-model:value="insert_form.title" />
            </a-form-item>
            <a-form-item label="词条简介">
                <a-input v-model:value="insert_form.description" />
            </a-form-item>
            <a-form-item label="词条分类">
                <a-select v-model:value="insert_form.category" >
                    <a-select-option value="home">首页</a-select-option>
                    <a-select-option value="understanding">一文读懂系列</a-select-option>
                    <a-select-option value="news">前沿资讯</a-select-option>
                    <a-select-option value="knowledge_map">学习路径</a-select-option>
                    <a-select-option value="hot_entry">热门词条</a-select-option>
                    <a-select-option value="recent_edit">最近修改</a-select-option>
                    <a-select-option value="new_entry">最新词条</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="onEditText(false)">编辑内容</a-button>
            </a-form-item>
        </a-form>
    </a-modal>

    <a-modal v-model:open="textOpen" width="1000px" title="编辑内容" @ok="textOpen = false" zIndex = 2000>
        <v-md-editor v-model="text" height="600px"></v-md-editor>
    </a-modal>
    <a-modal v-model:open="previewOpen" width="1000px" title="预览词条" @ok="textOpen = false" :footer="null">
        <v-md-preview :text="previewText"  style="height:600px"></v-md-preview>
    </a-modal>

</template>

<script>
import {DeleteOutlined, DiffOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons-vue";
import {ref, onMounted} from "vue";
import api from "@/api/api";
import router from "@/router";
import openNotification from "@/components/notification";
export default {
    name: "TopicsView",
    components:{EditOutlined, DeleteOutlined, DiffOutlined, EyeOutlined},
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
                dataIndex: 'id',
                width: 150,
            },
            {
                title: '标题',
                dataIndex: 'title',
                width: 300,
            },
            {
                title: '分类',
                dataIndex: 'category',
                width: 200,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                width: 200,
            },
        ];

        const data = ref([]);

        function onDelete(record) {
            // console.log(record)
            api.post('/deleteEntry', record.id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            } ).then((res) => {
                if (res.data.code === 20000) {
                    openNotification('success','删除成功', '请刷新页面')
                } else {
                    openNotification('error','删除失败', '请稍后再试')
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }

        function onEdit(record) {
            edit_visible.value = true;
            edit_form.value = record;
            console.log(edit_form.value)
        }

        function editOk() {
            edit_form.value.content = text.value;
            edit_form.value.eid = edit_form.value.id;
            edit_form.value.id = undefined;
            console.log(edit_form.value)
            api.post('/modifyEntry', edit_form.value).then((res) => {
                if (res.data.code === 20000) {
                    openNotification('success','修改成功', '请刷新页面')
                    edit_visible.value = false;
                } else {
                    openNotification('error','修改失败', '请稍后再试')
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }

        function insertOk() {
            console.log(insert_form.value)
            insert_form.value.content = text.value;
            api.post('/addEntry', insert_form.value).then((res) => {
                if (res.data.code === 20000) {
                    openNotification('success','添加成功', '请刷新页面')
                    insert_visible.value = false;
                } else {
                    openNotification('error','添加失败', '请稍后再试')
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }

        async function onEditText(flag) {
            textOpen.value = true;
            if(flag == false){
                text.value = '';
                return;
            }
            const res = await api.get("/entryInfo", {
                params: {
                    id: edit_form.value.id
                }
            });
            if(res.data.code === 20000){
                text.value =  res.data.data.entryInfo.text;
            } else {
                openNotification('error','获取词条信息失败', '请稍后再试')
            }
        }

        async function preview(record) {
            previewOpen.value = true;
            const res = await api.get("/entryInfo", {
                params: {
                    id: record.id
                }
            });
            if(res.data.code === 20000){
                previewText.value =  res.data.data.entryInfo.text;
            } else {
                openNotification('error','获取词条信息失败', '请稍后再试')
            }
        }

        async function fetchEntries() {
            await api.get('/entry').then((res) => {
                if (res.data.code === 20000) {
                    data.value = res.data.data.entries;
                } else {
                    openNotification('error','获取词条信息失败', '请稍后再试')
                }
            }).catch((err) => {
                console.log(err);
                openNotification('error','登录信息失效', '请重新登录')
                router.push('/login');
            })
        }


        onMounted(async () => {
            await fetchEntries();
        })


        return {
            columns, data, onDelete, onEdit, edit_visible, insert_visible, edit_form, insert_form,
            editOk, insertOk, text, textOpen, onEditText, preview, previewOpen, previewText
        }

    }
}
</script>

<style scoped>
.table {
    margin: 0 30px 0 10px
}
</style>