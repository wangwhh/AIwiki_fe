<template>
  <div class="index-body">
      <a-typography-title class="index-title">词典索引</a-typography-title>
      <a-row>
          <a-col :span="8" v-for="(group, letter) in groupedEntries" class="index-content">
              <a-divider orientation="left">
                  {{letter}}
              </a-divider>
              <a-flex wrap="wrap" gap="large">
                  <a-button v-for="entry in group" type="link">
                      {{entry.title}}
                  </a-button>
              </a-flex>
          </a-col>
      </a-row>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {fetchEntries} from "@/api";
export default {
    name: "DictView",
    setup() {
        // 将 entries_all 按首字母分类
        const groupedEntries = ref({});

        onMounted(async () => {
            const entries = await fetchEntries();

            const groups = {};
            entries.forEach(entry => {
                let letter = entry.title[0]; // 获取首字母并转为大写
                if(letter >= 'a' && letter <= 'z') letter = letter.toUpperCase();
                if (!groups[letter]) {
                    groups[letter] = [];
                }
                groups[letter].push(entry);
            });
            groupedEntries.value = groups;
            console.log(groupedEntries.value)
        });

        return {
            groupedEntries
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