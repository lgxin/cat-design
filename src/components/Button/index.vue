<template>
  <button :class="addClass()">
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'CatBtn',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      btnClass: {
        'cat-btn': true,
        'cat-btn-default': true,
        'cat-btn-primary': false,
        'cat-btn-error': false,
        'cat-btn-text': false
      }
    }
  },
  methods: {
    addClass() {
      Object.keys(this.btnClass).forEach(el => {
        if (`cat-btn-${this.type}` === el) {
          this.btnClass[el] = true;
          this.btnClass['cat-btn-default'] = false;
        }
      });
      return this.btnClass
    }
  }
}
</script>

