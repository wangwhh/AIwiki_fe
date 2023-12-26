<template>
    <!-- 个人信息内容 -->
    <a-layout >
        <a-layout-sider class="user-sider" width="28%">
            <a-avatar :size="200" style="margin-top: 5%">W</a-avatar>
            <a-button style="width: 200px; margin-top: 8%" type="primary" @click="handleEditClicked">编辑信息</a-button>
        </a-layout-sider>
        <a-layout-content style="padding: 50px">
            <a-descriptions title="个人信息">
                <a-descriptions-item label="用户名">{{user_info.name}}</a-descriptions-item>
                <a-descriptions-item label="邮箱">{{user_info.email}}</a-descriptions-item>
                <a-descriptions-item label="电话号码">{{user_info.phone}}</a-descriptions-item>
                <a-descriptions-item label="性别">{{user_info.gender}}</a-descriptions-item>
                <a-descriptions-item label="生日">{{user_info.birth}}</a-descriptions-item>
                <a-descriptions-item label="个人简介">{{user_info.description}}</a-descriptions-item>
            </a-descriptions>
        </a-layout-content>
    </a-layout>

    <a-modal v-model:open="edit_form_visible" title="编辑个人信息" @cancel="handleCancel" @ok="handleBeforeOk">
        <a-form :model="edit_form">
            <a-form-item label="用户名">
                <a-input v-model:value="edit_form.name" :error=errorStatus.name />
            </a-form-item>
            <a-form-item label="邮箱">
                <a-input v-model:value="edit_form.email" :error=errorStatus.email />
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
            <a-form-item v-if="alerts.flag">
                <a-alert type="error">{{alerts.message}}</a-alert>
            </a-form-item>
        </a-form>
    </a-modal>
<!--      <div v-if="selectedMenu === '2'">-->
<!--        &lt;!&ndash; 类别选择与需求填写 &ndash;&gt;-->
<!--        <a-divider orientation="left" style="font-size: 20px">类别与需求</a-divider>-->
<!--        <a-form :form="userCategoryForm" @finish="onUserCategoryFinish">-->
<!--          <a-form-item label="选择类别">-->
<!--            <a-select v-model="selectedCategory" style="width: 200px">-->
<!--              <a-select-option value="学生">学生</a-select-option>-->
<!--              <a-select-option value="爱好者">AI爱好者</a-select-option>-->
<!--              <a-select-option value="专业者">专业技术人员</a-select-option>-->
<!--            </a-select>-->
<!--          </a-form-item>-->
<!--          <a-form-item label="具体需求" name="requirement" rules="required">-->
<!--            <a-input />-->
<!--          </a-form-item>-->
<!--          <a-form-item>-->
<!--            <a-button type="primary" @click="handleSubmit">确认提交</a-button>-->
<!--          </a-form-item>-->
<!--        </a-form>-->
<!--      </div>-->

<!--      <div v-if="selectedMenu === '3'">-->
<!--      &lt;!&ndash; 用户贡献词条 &ndash;&gt;-->
<!--      <a-divider orientation="left" style="font-size: 20px">用户贡献词条</a-divider>-->
<!--      <a-form :form="userContributionForm" @finish="onUserContributionFinish">-->
<!--        <a-form-item label="新词条" name="newEntry" rules="required">-->
<!--          <a-input v-model="newEntry" />-->
<!--        </a-form-item>-->
<!--        <a-form-item>-->
<!--          <a-button type="primary" @click="handleSubmitEntry">提交词条</a-button>-->
<!--        </a-form-item>-->
<!--      </a-form>-->
<!--      <a-divider orientation="left" style="font-size: 20px">历史词条</a-divider>-->
<!--      <a-list bordered :dataSource="historyEntries">-->
<!--        <template v-slot:renderItem="{ item }">-->
<!--          <a-list-item>{{ item }}</a-list-item>-->
<!--        </template>-->
<!--      </a-list>-->
<!--    </div>-->

<!--    <div v-if="selectedMenu === '4'">-->
<!--      &lt;!&ndash; 收藏词条 &ndash;&gt;-->
<!--      <a-divider orientation="left" style="font-size: 20px">收藏词条</a-divider>-->
<!--      <a-list bordered :dataSource="favoriteEntries">-->
<!--        <template v-slot:renderItem="{ item }">-->
<!--          <a-list-item>{{ item }}</a-list-item>-->
<!--        </template>-->
<!--      </a-list>-->
<!--    </div>-->
  </template>  
    
<script>
import {fetchUserInfo, modifyUserInfo} from "@/api/user";
import {onMounted, ref} from "vue";
import router from "@/router";
import api from "@/api/api";
import notification from "@/components/notification";
import openNotification from "@/components/notification";

export default {
  name: "UserInfo",
    setup() {
        const user_info = ref({
            name: '',
            email: '',
            phone: '',
            gender: '',
            birth: '',
            description: '',
        });
        const edit_form_visible = ref(false);
        const edit_form = ref({
            name: '',
            email: '',
            phone: '',
            gender: '',
            birth: '',
            description: '',
        });
        const errorStatus = ref({
            email: false,
            name: false,
        });

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
                errorStatus.value.email = true;
                alerts.value.flag = true;
                alerts.value.message = '邮箱格式错误';
                return false;
            }else {
                alerts.value.flag = false;
                errorStatus.value.email = false;
            }

            if(edit_form.value.name.length <= 6) {
                errorStatus.value.name = true;
                alerts.value.flag = true;
                alerts.value.message = '用户名长度不得小于6位';
                return false;
            }else{
                alerts.value.flag = false;
                errorStatus.value.name = false;
            }

            modifyUserInfo(edit_form.value).then(res => {
                if(res.code === 20000) {
                    openNotification('success', '修改成功', '个人信息已更新');
                }else {
                    openNotification('error', '修改失败', '请稍后再试');
                }
            })
        }

        onMounted(async () => {
            console.log("mounted")
            user_info.value = await fetchUserInfo();
        });
        return {
            user_info, edit_form_visible, edit_form, errorStatus, alerts,
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
