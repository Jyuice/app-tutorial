<script setup>
import guide from '../components/guide/Guide.vue'
import step from '../components/guide/Stepbar.vue'
import { DArrowLeft, DArrowRight, Back } from "@element-plus/icons"
import { reactive, ref, computed } from 'vue'
import { getImgList } from "../../module/getImgList";

let active = ref(0)

const questionId = window.history.state.current.split('?')[1].split('=')[1]
const imglist = getImgList(questionId)
let len = ref(imglist.length)

let data = reactive({
    list: [...imglist],
    current: computed(() => data.list[active.value]),
})

const prev = () => {
    if(active.value > 0) {
        active.value--
    }
}
const next = () => {
    if(++active.value >= len.value) active.value = 0
}

const fallback = () => {
    window.history.go(-1)
}
</script>

<template>
  <div id="resolve">
      <!-- <div id="back" @click="fallback">
        <el-icon><back /></el-icon>返回
      </div> -->
      <div id="arrow">
          <div id="left" @click="prev">
              <el-icon><d-arrow-left /></el-icon>
          </div>
          <div id="right" @click="next">
              <el-icon><d-arrow-right /></el-icon>
          </div>
      </div>    
      <div id="steps">
          <step :active="active" :account="len" />
      </div>
      <guide :current="data.current"/>
  </div>
</template>

<style scoped lang="stylus">

#resolve {
    padding-top: 1.25rem
    #back {
        // position absolute
        // margin: 0 auto .625rem
        margin-left: 1.875rem
        margin-bottom: .625rem 
        width: 5em
        height: 1.875rem
        // background #ffc0cb
        border: 1px solid #ffc0cb
        border-radius 1.25rem
        text-align: center
        line-height: 1.875rem
        box-shadow: #ffc0cb .0625rem .0625rem .25rem .125rem
        z-index: 999
    }
}
#arrow {
    position absolute
    top: 50%
    transform: translateY(-50%)
    width: 100%
    z-index: 1000
    >div {
        position: absolute
        width: 15%
        height: 6.25rem
        text-align: center
        line-height: 6.25rem
        background: #ffc0cb
        opacity .8
    }
    #left {
        left: 0
        border-radius: 0 .8rem .8rem 0
    }
    #right {
        right: 0
        border-radius: .8rem 0 0 .8rem
    }
}
</style>