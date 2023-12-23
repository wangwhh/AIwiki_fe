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

import {onMounted, ref} from "vue";
import topics_all from "@/assets/topics_all";
import router from "@/router";
import {fetchRelation} from "@/api/entry";
export default {
    name: "Relations",
    setup() {
      let relate_entries = ref([]);
      function onEntryClicked(entry) {
          let new_page = router.resolve({
              path:'/entry/' ,
              query: {
                  id: entry.id
              }
          });
          window.open(new_page.href, '_blank');
      }

      onMounted(async () => {
          const id = router.currentRoute.value.query.id;
          relate_entries.value = await fetchRelation(id);

      });

      return {
        relate_entries,
        onEntryClicked
      }
  }
}

</script>

<style scoped>

</style>