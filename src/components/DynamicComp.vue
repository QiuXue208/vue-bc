<template>
  <div id="dynamic-component-demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <keep-alive>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
  import TabPosts from '@/components/TabPosts.vue'
  import TabArchive from '@/components/TabArchive.vue'
  export default {
    data() {
      return {
        currentTab: "Posts",
        tabs: ["Posts", "Archive"]
      }
    },
    components: {
      TabPosts,
      TabArchive
    },
    computed: {
      currentTabComponent: function() {
        return "Tab" + this.currentTab;
      }
    }
  }
</script>

<style scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
</style>