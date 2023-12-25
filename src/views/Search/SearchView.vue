<template>
  <a-typography class="search-res">
      <a-typography-title style="margin-left: 20px">搜索结果</a-typography-title>
      <a-typography-title :level="3"> {{ message }} </a-typography-title>
      <div v-for="entry in result_list">
          <a-divider></a-divider>
          <a-typography-link :href="`entry?id=${entry.eid}`">{{entry.title}}</a-typography-link>
          <a-typography-paragraph>{{entry.description}}</a-typography-paragraph>
      </div>

  </a-typography>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import {search} from "@/api/search";

export default {
    name: "SearchView",
    setup() {
        const result_list = ref([]);
        const query = router.currentRoute.value.query.query;
        const message = ref('');
        onMounted(async () => {
            const res = await search(query);
            message.value = res.msg;
            result_list.value = res.data.searchRes;
            console.log(message.value);
        });
        return {
            result_list,
            query,
            message,
        }
    }
}
</script>

<style scoped>
.search-res {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    margin: 100px 270px 16px 270px;
    font-size: 20px;
    font-weight: bold;
}
</style>