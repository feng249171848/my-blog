<template>
  <div id="app">
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    "add-blog":AddBlog,
    "show-blogs":ShowBlogs,
    "blog-header":BlogHeader
  }
}
</script>

<style>
  body{ padding: 0; margin: 0;}
</style>
