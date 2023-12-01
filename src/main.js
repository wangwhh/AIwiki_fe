import './assets/main.css'
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
    Prism,
    config: {
        toc: {
            includeLevel: [3, 4],
        },
    },
});


const app = createApp(App);

app.use(router);
app.use(VMdPreview);
app.use(Antd).mount('#app');
