<template>
  <div class="hello">
    <p style="width:20px;overflow:hidden">已跳转cddddddddddddddddd</p>
    <input type="text" v-model="text" v-on:keyup.enter="submit()"/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data:function() {
    return {
text: ''
  }
},
methods: {
  submit:function() {
    
    console.log(this.text);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
