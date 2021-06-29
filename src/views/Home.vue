<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DynamicComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DynamicComp from '@/components/DynamicComp.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    HelloWorld,
    DynamicComp
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
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    setName(){
      this.onepiece = 'JorDan'
    }
  },
}
</script>
