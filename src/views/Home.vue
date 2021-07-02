<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DynamicComp ref="dynamic" />
    <Child>
      <p>p1</p>
      <p>p2</p>
      <h1 slot="header">header</h1>
      <h5 slot="footer">footer</h5>
    </Child>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DynamicComp from '@/components/DynamicComp.vue'
import Child from '@/components/Render.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  mounted() {
    this.$nextTick(function() {
      console.log(this.$refs.dynamic)
    })
  },
  components: {
    HelloWorld,
    DynamicComp,
    Child
  },
  computed: {
    onepiece: {
      get(){
        return this.name +'Bryant';
      },
      set(newVal){
        //当你给onepiece设置值的时候set就就会调用
        this.msg = newVal+'is the greatest basketball player';
      }
    },
  },
  methods: {
    setName(){
      this.onepiece = 'JorDan'
    }
  },
}
</script>
