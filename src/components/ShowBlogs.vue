<template>
  <div id="showBlogs" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input v-model="search" type="text" placeholder="搜索">
    <div class="sigle-blog" v-for="blog in filteredBlogs" v-bind:key="blog.id">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>
          {{blog.title | toUpperCase}}
        </h2>
      </router-link>
      <article>
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShowBlogs',
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  created(){
    //获取数据
    axios.get("/posts.json")
    .then((data)=>{
      //console.log(data.data);
      return data.data //get到的数据是对象
    })
    .then(data=>{
      var blogsArray = [];
      for(let key in data){ //遍历对象，每个对象有唯一key值
        //console.log(data[key])
        data[key].id=key; //给每个对象赋值id
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },
  computed:{
    //搜索过滤
    filteredBlogs(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  //自定义过滤器
  filters:{
    snippet(value){
      return value.slice(0,200)+'...'
    }
  },
  //自定义指令
  directives:{
    //标题颜色变换
    rainbow:{
      bind(el,binding,vnode){
        el.style.color='#'+Math.random().toString(16).slice(2,8);
      }
    },
    //主题颜色更改
    theme:{
      bind(el,binding,vnode){
        if(binding.value=='wide'){
          el.style.maxWidth="960px";
        }else if(binding.value=='narrow'){
          el.style.maxWidth="600px";
        }
        if(binding.arg=='column'){
          el.style.backgroundColor='#6677cc';
          el.style.padding="20px"
        }
      }
    }
  }
}
</script>

<style scoped>
#showBlogs{
  max-width: 800px;
  margin: 0 auto;
}
.sigle-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px solid #aaa;
}
.sigle-blog a{
  color: #444;
  text-decoration: none;
}
input[type="text"]{
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
}
</style>
