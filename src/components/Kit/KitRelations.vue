<!-- 相关词条 -->
<template>
  <!-- 优质词条 -->
  <a-card title="相关词条" :bordered="false" style="width: 100%">
      <a-button v-for="kiy in relate_entries" type="link" style="width: 100%; text-align: initial">{{kiy.title}}</a-button>
  </a-card>
</template>

<script>

import {ref} from "vue";
export default {
    name: "Relations",
    setup() {
      const relate_entries = ref([{
        title: "NLP",
        id: 1
      },{
        title: "预训练",
        id: 2
      },{
        title: "大语言模型",
        id: 3
      },{
        title: "LLM",
        id: 4
      } ,{
        title: "BackProps",
        id: 3
      }])
      return {
        relate_entries
      }
  }
}

</script>

<style scoped>

</style>