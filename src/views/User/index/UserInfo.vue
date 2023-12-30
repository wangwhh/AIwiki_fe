<template>
    <!-- 个人信息内容 -->
    <a-layout >
        <a-layout-sider class="user-sider" width="28%">
            <a-avatar :size="200" style="margin-top: 5%; background-color: #5ea5f5">
                <template #icon><UserOutlined /></template>
            </a-avatar>
            <a-button style="width: 200px; margin-top: 8%" type="primary" @click="handleEditClicked">编辑信息</a-button>
        </a-layout-sider>
        <a-layout-content style="padding: 50px">
            <a-descriptions title="个人信息" :column="{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }">
                <a-descriptions-item label="用户名">{{user_info.username}}</a-descriptions-item>
                <a-descriptions-item label="邮箱">{{user_info.email}}</a-descriptions-item>
                <a-descriptions-item label="电话号码">{{user_info.phone}}</a-descriptions-item>
                <a-descriptions-item label="性别">{{user_info.gender}}</a-descriptions-item>
                <a-descriptions-item label="生日">{{user_info.birth}}</a-descriptions-item>

                <a-descriptions-item label="职业">学生</a-descriptions-item>
                <a-descriptions-item label="感兴趣">
                    <a-tag color="blue">基础知识</a-tag>
                    <a-tag color="blue">自然语言处理</a-tag>
                    <a-tag color="blue">机器学习</a-tag>
                </a-descriptions-item>

                <a-descriptions-item label="个人简介" :span="2">{{user_info.description}}</a-descriptions-item>
            </a-descriptions>
        </a-layout-content>
    </a-layout>

    <a-modal v-model:open="edit_form_visible" title="编辑个人信息" @cancel="handleCancel" @ok="handleBeforeOk">
        <a-form :model="edit_form">
            <a-form-item label="用户名">
                <a-input v-model:value="edit_form.username"/>
            </a-form-item>
            <a-form-item label="邮箱">
                <a-input v-model:value="edit_form.email" :error=emailError />
            </a-form-item>
            <a-form-item label="电话号码">
                <a-input v-model:value="edit_form.phone" />
            </a-form-item>

            <a-form-item label="地址">
                <a-input v-model:value="edit_form.address" />

            </a-form-item>
            <a-form-item label="生日">
                <a-input v-model:value="edit_form.birth" />
            </a-form-item>

            <a-form-item label="个人简介">
                <a-textarea v-model:value="edit_form.description" />
            </a-form-item>

            <a-form-item label="职业">
                <a-select>
                    <a-select-option value="student">学生</a-select-option>
                    <a-select-option value="worker">上班族</a-select-option>
                    <a-select-option value="teacher">教师</a-select-option>
                    <a-select-option value="else">其他</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="感兴趣">
                <a-select mode="tags" style="width: 100%">
                    <a-select-option value="基础知识">基础知识</a-select-option>
                    <a-select-option value="自然语言处理">自然语言处理</a-select-option>
                    <a-select-option value="机器学习">机器学习</a-select-option>
                    <a-select-option value="深度学习">深度学习</a-select-option>
                    <a-select-option value="计算机视觉">计算机视觉</a-select-option>
                    <a-select-option value="强化学习">强化学习</a-select-option>
                    <a-select-option value="图神经网络">图神经网络</a-select-option>
                    <a-select-option value="生成对抗网络">生成对抗网络</a-select-option>
                    <a-select-option value="AI绘画">AI绘画</a-select-option>
                    <a-select-option value="AI写作">AI写作</a-select-option>
<!--                    ...可以添加很多-->
                </a-select>
            </a-form-item>

        </a-form>
    </a-modal>
  </template>  
    
<script>
import {fetchUserInfo, modifyUserInfo} from "@/api/user";
import {onMounted, ref} from "vue";
import router from "@/router";
import openNotification from "@/components/notification";
import {UserOutlined} from "@ant-design/icons-vue";

export default {
  name: "UserInfo",
    components: {UserOutlined},
    setup() {
        const user_info = ref({
            username: '',
            email: '',
            phone: '',
            gender: '',
            birth: '',
            description: '',
        });
        const edit_form_visible = ref(false);
        const edit_form = ref({

        });
        const emailError= ref(false);

        const alerts = ref({
            flag: false,
            message: '',
        })
        function handleEditClicked() {
            edit_form_visible.value = true;
            edit_form.value = user_info.value;
        }
        function handleCancel() {
            edit_form_visible.value = false;
        }

        function handleBeforeOk() {
            function validEmail(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }

            if(validEmail(edit_form.value.email) === false) {
                emailError.value = true;
                alerts.value.flag = true;
                alerts.value.message = '邮箱格式错误';
                return false;
            }else {
                alerts.value.flag = false;
                emailError.value = false;
            }

            modifyUserInfo(edit_form.value).then(res => {
                if(res.code === 20000) {
                    openNotification('success', '修改成功', '个人信息已更新');
                    edit_form_visible.value = false;
                }else {
                    openNotification('error', '修改失败', res.msg);
                }
            })
        }

        onMounted(async () => {
            console.log("mounted")
            user_info.value = await fetchUserInfo();
        });
        return {
            user_info, edit_form_visible, edit_form, emailError, alerts,
            handleCancel, handleBeforeOk, handleEditClicked
        }
    },
};
</script>
    
<style scoped>

.sider-menu {
    height: 100%;
    width: 230px !important;
    max-width: 300px !important;
    margin: 100px 0 10px 20px;
    border-radius: 10px;
    background-color: white;
    position: fixed;
}
.user-sider {
    box-shadow: 0 0 0 #ffffff;
    padding: 50px;
    background-color: white;
}
</style>
