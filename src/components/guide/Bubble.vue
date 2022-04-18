<script setup>
let props = defineProps({
        msg: String
    })
</script>


<template>
  <div id="bubble">
      {{props.msg}}
  </div>
</template>

<style lang='stylus' scoped>
#bubble {
    position relative
    padding: .625rem
    max-width: 12.5rem
    word-break: break-all
    border-radius: .625rem
    background: #ffc0cb
    font-weight: bold
}

#bubble::before {
    content: ''
    display: block
    position: absolute
    bottom: -0.625rem
    width: 0
    height: 0
    border-style: solid;
    border-width: .625rem .625rem 0 0;
    border-color: #ffc0cb transparent transparent transparent;
}
</style>