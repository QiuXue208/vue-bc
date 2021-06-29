<template>
  <button @click="$emit('update', '这是新的标题')">更改标题</button>
</template>

<script>
  export default {
    name: 'text-document',
    props: {
      title: String
    }
  }
</script>