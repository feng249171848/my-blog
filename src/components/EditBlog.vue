<template>
  <div id="addBlog">
    <h2>编辑博客</h2>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required >

      <label>博客内容</label>
      <textarea type="text" v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories">
        <!-- {{blog.categories}} -->
      </div>

      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author.id">
          {{author}}
        </option>
      </select>

      <button v-on:click.prevent="post()">保存</button>
    </form>

    <div v-if="submited">
      <h3>您的博客发布成功！</h3>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "AddBlog",
  data() {
    return {
      id:this.$route.params.id,
      blog: {},
      authors:["Hene","Rose","Rong"],
      submited:false
    }
  },
  methods:{
    post:function(){
      this.$http.put('/posts/'+this.id+'.json',this.blog)
      .then(function(data){
        //console.log(data);
        this.submited=true;
      })
    }
  },
  created(){
    //console.log(this.id);
    axios.get('/posts/'+this.id+'.json')
    .then((data)=>{
      //console.log(data.data);
      this.blog=data.data;
      //categories在这里不知道为什么会变成一个对象，在编辑只选中一个分类的博客的时候，编辑界面分类会出现bug，变成4个分类全部选中。下面的方法是将对象转换为数组后使其正常。
      console.log(this.blog.categories);
      var arr = [];
      for (var i in this.blog.categories) {
          arr.push(this.blog.categories[i]); 
      }
      //console.log(arr);
      this.blog.categories=arr;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addBlog *{
  box-sizing: border-box;
}
#addBlog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{ 
  height: 200px;;
}
#checkboxes label{
  display: inline-block;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;;
}
button{
  display: block;
  margin: 20px 0;
  background: rgb(2, 110, 210);
  color: #fff;
  border: 0;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

h3{ 
  margin-top: 10px;
}

</style>
