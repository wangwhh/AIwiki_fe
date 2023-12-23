<template>  
    <div>  
      <a-layout>  
        <a-layout-sider class="sider-menu">  
          <a-menu 
            default-selected-keys="1" 
            mode="inline" 
            :style="{ height: '100%', borderRadius: '10px' }"
             @click="handleMenuClick">  
            <a-menu-item key="1">个人信息</a-menu-item>  
            <a-menu-item key="2">个性选择</a-menu-item>
            <a-menu-item key="3">词条贡献</a-menu-item>  
            <a-menu-item key="4">词条收藏</a-menu-item> 
          </a-menu>  
        </a-layout-sider>

        <a-layout-content class="usercontent" style="padding: 24px">  
          <div v-if="selectedMenu === '1'">  
            <!-- 个人信息内容 -->  
            <a-divider orientation="left" style="font-size: 20px">个人信息</a-divider>  
            <a-card class="userCard">  
              <a-avatar :src="user.avatar" :size="150" />  
              <a-typography :style="{ marginTop: '20px' }">  
                <a-typography-title align="center" :level="3">{{user.name}}</a-typography-title>  
                <a-typography-paragraph align="center">{{user.bio}}</a-typography-paragraph>  
              </a-typography>  
              <a-divider></a-divider>  
              <a-typography :style="{ marginTop: '20px' }">  
                <a-typography-title :level="4">联系信息</a-typography-title>  
                <a-typography-paragraph>  
                  Email: {{user.email}}  
                </a-typography-paragraph>  
                <a-typography-paragraph>  
                  Phone: {{user.phone}}  
                </a-typography-paragraph>  
                <a-button @click="editProfile">编辑个人信息</a-button>
              </a-typography>  
            </a-card>  
          </div>  

          <div v-if="selectedMenu === '2'">  
            <!-- 类别选择与需求填写 -->  
            <a-divider orientation="left" style="font-size: 20px">类别与需求</a-divider>  
            <a-form :form="userCategoryForm" @finish="onUserCategoryFinish">  
              <a-form-item label="选择类别">  
                <a-select v-model="selectedCategory" style="width: 200px">  
                  <a-select-option value="学生">学生</a-select-option>  
                  <a-select-option value="爱好者">AI爱好者</a-select-option>  
                  <a-select-option value="专业者">专业技术人员</a-select-option>  
                </a-select>  
              </a-form-item>  
              <a-form-item label="具体需求" name="requirement" rules="required">  
                <a-input />  
              </a-form-item>  
              <a-form-item>  
                <a-button type="primary" @click="handleSubmit">确认提交</a-button>  
              </a-form-item>  
            </a-form>  
          </div>  

          <div v-if="selectedMenu === '3'">    
          <!-- 用户贡献词条 -->    
          <a-divider orientation="left" style="font-size: 20px">用户贡献词条</a-divider>    
          <a-form :form="userContributionForm" @finish="onUserContributionFinish">    
            <a-form-item label="新词条" name="newEntry" rules="required">    
              <a-input v-model="newEntry" />    
            </a-form-item>    
            <a-form-item>    
              <a-button type="primary" @click="handleSubmitEntry">提交词条</a-button>    
            </a-form-item>    
          </a-form>    
          <a-divider orientation="left" style="font-size: 20px">历史词条</a-divider>    
          <a-list bordered :dataSource="historyEntries">    
            <template v-slot:renderItem="{ item }">    
              <a-list-item>{{ item }}</a-list-item>    
            </template>    
          </a-list>    
        </div>

        <div v-if="selectedMenu === '4'">    
          <!-- 收藏词条 -->    
          <a-divider orientation="left" style="font-size: 20px">收藏词条</a-divider>    
          <a-list bordered :dataSource="favoriteEntries">    
            <template v-slot:renderItem="{ item }">    
              <a-list-item>{{ item }}</a-list-item>    
            </template>    
          </a-list>    
        </div>

        </a-layout-content>  
      </a-layout>  
      
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        selectedMenu: '1', // 默认选中个人信息  
        user: {  
          name: "John Doe",  
          bio: "A passionate individual interested in web development.",  
          avatar: "https://via.placeholder.com/150",  
          email: "zju@example.com",  
          phone: "+1234567890"  
        },  
        
        userCategoryForm: null,  
        selectedCategory: null,
        userContributionForm: null,    
        newEntry: '',    
        historyEntries: [],
        favoriteEntries: [
        { name: '词条1', link: 'https://example.com/entry1' },  
        { name: '词条2', link: 'https://example.com/entry2' }  
        ]
      };  
    },  
    methods: {  
      handleMenuClick({ key }) {  
        this.selectedMenu = key;  
      },  
      onUserCategoryFinish() {  
        // 在这里进行提交用户类别和需求的逻辑处理  
        this.$message.success('类别与需求提交成功');  
      },  
      handleSubmit() {  
        this.$message.info('已提交');  
        this.historyEntries.push(this.newEntry);  
        this.newEntry = ''; // 清空输入框  
      },
      onUserContributionFinish() {    
      this.$message.success('词条提交成功');    
    },    
    handleSubmitEntry() {    
      this.historyEntries.push(this.newEntry);    
      this.newEntry = ''; // 清空输入框    
      this.$message.info('词条已提交');    
    }
    }  
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
.usercontent {
    /*background: #fff;*/
    /*margin-top: 72px;*/
    margin: 100px 340px 16px 270px;
    overflow: initial ;
    /*border-radius: 10px;*/
    text-align: center;
    /*padding: 24px;*/
}
  .userCard {  
    width: 600px;  
    margin: 20px auto;  
    text-align: center;  
  }  
  </style>  
