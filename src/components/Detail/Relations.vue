<!-- 相关词条 -->
<template>
  <!-- 优质词条 -->
  <a-card title="相关词条" :bordered="false" style="width: 100%">
      <a-button v-for="entry in relate_entries"
                type="link" style="width: 100%; text-align: initial"
                @click="onEntryClicked(entry)">
          {{entry.title}}
      </a-button>
  </a-card>
</template>

<script>

import {ref} from "vue";
import topics_all from "@/assets/topics_all";
import router from "@/router";
export default {
    name: "Relations",
    setup() {
      const relate_entries_id = ref([5, 6, 7, 8, 9]);
      let relate_entries = ref([]);
      relate_entries_id.value.forEach((id) => {
          relate_entries.value.push(topics_all.value[id - 1]);
      });
      function onEntryClicked(entry) {
          let new_page = router.resolve({
              path:'/entry/' ,
              query: {
                  id: entry.id
              }
          });
          window.open(new_page.href, '_blank');
      }
      return {
        relate_entries,
        onEntryClicked
      }
  }
}

</script>

<style scoped>

</style>