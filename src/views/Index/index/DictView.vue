<template>
  <div class="index-body">
      <a-typography-title class="index-title">词典索引</a-typography-title>
      <a-row>
          <a-col :span="8" v-for="(group, letter) in groupedEntries" class="index-content">
              <a-divider orientation="left">
                  {{letter}}
              </a-divider>
              <a-flex wrap="wrap" gap="large">
                  <a-button v-for="entry in group" type="link" @click="onEntryClicked(entry)">
                      {{entry.title}}
                  </a-button>
              </a-flex>
          </a-col>
      </a-row>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import router from "@/router";
import {fetchEntries} from "@/api";
export default {
    name: "DictView",
    setup() {
        // 将 entries_all 按首字母分类
        const groupedEntries = ref({});

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
            const entries = await fetchEntries();

            const groups = {};
            entries.forEach(entry => {
                let letter = entry.title.substring(0,1); // 获取首字母并转为大写
                if(letter >= 'a' && letter <= 'z') letter = letter.toUpperCase();
                if (!groups[letter]) {
                    groups[letter] = [];
                }
                if (groups[letter].length < 4){
                    groups[letter].push(entry);
                }
            });
            groupedEntries.value = groups;
            console.log(groupedEntries.value)
        });

        return {
            groupedEntries,
            onEntryClicked
        };
    }
}
</script>

<style scoped>
.index-body {
    background: white;
    border-radius: 10px;
    width: calc(70vw - 100px);
    margin: 100px auto auto;
    padding: 10px;
}
.index-title {
    margin: 50px 0 0 70px;
}
.index-content {
    margin: 30px 70px 20px 70px;
}
</style>