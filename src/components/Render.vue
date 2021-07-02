<script>
  export default {
    name: 'Child',
    data() {
      return {
        level: 2
      }
    },
    render: function (createElement) {
        const content = this.$slots.default
        const header = this.$slots.header
        const footer = this.$slots.footer

        return createElement('div', [
          createElement('header', header),
          createElement('main', content),
          createElement('footer', footer)
        ])
    }
  }
</script>