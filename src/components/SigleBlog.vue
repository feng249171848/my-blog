<template>
  <div id="sigleblog">
    <h1>
      {{blog.title}}
    </h1>
    <article>
      {{blog.content}}
    </article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category.id">
        {{category}}
      </li>
    </ul>
    <div>
      <button  @click="deleteSingleBlog()">删除</button>
      <router-link class="edit" :to="/edit/+id">编辑</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SigleBlog',
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    axios.get('/posts/'+this.id+'.json')
    .then((data)=>{
      this.blog=data.data;
    })
  },
  methods:{
    deleteSingleBlog(){
      axios.delete('/posts/'+this.id+'.json')
      .then((data)=>{
        alert("删除成功！")
        this.$router.push({path:'/'})
      })
    }
  }
}
</script>

<style scoped>
#sigleblog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eee;
  border: 1px solid #aaa;
}
button,.edit{
  display: inline-block;
  margin: 20px 0 20px 20px;
  background: red;
  color: #fff;
  border: 0;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}
.edit{ 
  background: rgb(2, 110, 210);
}
</style>