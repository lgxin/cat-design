import Vue from "vue";
import catButton from "./Buttom/index.vue";

const Components = {
  catButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;