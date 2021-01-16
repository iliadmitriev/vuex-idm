<template>
  <div id="app">
    <PostForm></PostForm>
    <hr>
    <h1>{{countAllPosts}}</h1>
    <div class="posts">
      <div class="post"
           v-for="p in validPosts"
           :key="p.id"
      >
        <h3>{{p.title}}</h3>
        <p>{{p.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// mapGetters - for mapping getters as data
// mapActions - from mapping actions as methods
import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'

export default {
  name: 'App',
/*  computed: {
    allPosts () {
      return this.$store.getters.allPosts
    }
  },*/
  computed: mapGetters(['allPosts', 'countAllPosts', 'validPosts']),
  methods: mapActions(['fetchAllPosts']),
  async mounted() {
    //this.$store.dispatch('fetchAllPosts')
    await this.fetchAllPosts(4)
  },
  components: {
    PostForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
