<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:56:54
 * @LastEditTime: 2019-10-15 14:56:54
 * @LastEditors: your name
 -->

<template>
  <div>
    <UniSwitch v-model="isSwitch">
    </UniSwitch>
    <Button>default</Button>
    <Button type="text">text</Button>
    <Button type="error">error</Button>
    <Button type="primary">primary</Button>
  </div>
</template>

<script>

import UniSwitch from './uni-switch/index';
import Button from './Button/index';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      isSwitch: false
    }
  },
  components:{
    UniSwitch,
    Button
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
