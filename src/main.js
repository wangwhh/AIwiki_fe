import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
    Prism,
});

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});


const app = createApp(App);

app.use(router);
app.use(VueMarkdownEditor);
app.use(VMdPreview);
app.use(Antd).mount('#app');
