<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <button @click="$emit('enlarge-text', 2)">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    props: {
      post: { type: Object, default: () => {}}
    }
  }
</script>