<script setup>
import bubble from "./Bubble.vue";
import { onMounted, onUpdated, ref, watch } from "vue";

const prop = defineProps({
  current: Object
})

// 351*759
const clientWidth = document.documentElement.clientWidth*0.9
const clientHeight = document.documentElement.clientHeight*0.9

let img = new Image()
let canvas = null
let ctx = null
let offsetTop = 0
let offsetLeft = 0

onMounted(async() => {
  canvas = document.getElementById('canvas')
  
  canvas.width = clientWidth
  canvas.height = clientHeight

  // canvas 距离页面左上角的距离
  offsetTop = canvas.offsetTop
  offsetLeft = canvas.getBoundingClientRect().left

  ctx = canvas.getContext('2d')

  // ctx.fillStyle = "rgba(0,0,0, .3)";
  // ctx.fillRect (0, 0, clientWidth, clientHeight);

  img.onload = function(){
    ctx.drawImage(img,0,0, clientWidth, clientHeight);
  }
  await changeImg()
  await showMask()
  
  ctx.globalCompositeOperation = "destination-over"
})

onUpdated(async() => {
  await changeImg()
  await showMask()
})

let base = ref('../src/assets/')

const changeImg = () => {
  ctx.clearRect(0, 0, clientWidth, clientHeight)
  img.src = '../src/assets/' + prop.current.src
  // ctx.save()
}

const showMask = () => {
  if(prop.current.clip) {
    // ctx.restore()
    // ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = "rgba(0,0,0, .3)";
    ctx.fillRect (0, 0, clientWidth, clientHeight);
    // eval(prop.current.clip)
    ctx.clearRect(...prop.current.clip)
    // ctx.globalCompositeOperation = "destination-over"
  }
}

const getClip = e => {
  console.log((e.pageX-offsetLeft) + ',' + (e.pageY-offsetTop))
}
</script>

<template>
  <canvas id="canvas" @click="getClip"></canvas>
  <div id="pic-guide">
    <bubble id="bubble" :class="current.clip.length ? 'zoomIn' : ''" :msg="current.msg" />
    <img
      id="guide-svg"
      :class="current.clip.length ? 'slideInLeft' : ''"
      src="../../assets/svg/guideman.png"
      mode=""
    />
  </div>
  <!-- <div id="guide">
    {{ current.guide }}
  </div> -->
  <!-- <div id="img-container">
    <img id="img" :src="base+current.src" alt="" />
    <div id="mask" @click="getClip" :class="current.clip.length ? 'occur' : ''"></div>
    <div id="clip" :class="current.clip.length ? 'blink' : ''" :style="{clip: current.clip}">
      <img id="img" @click="getClip" :src="base+current.src" alt="" />
    </div>
    <div id="pic-guide">
        <bubble id="bubble" :class="current.clip.length ? 'zoomIn' : ''" :msg="current.msg" />
        <img
          id="guide-svg"
          :class="current.clip.length ? 'slideInLeft' : ''"
          src="../../assets/svg/guideman.png"
          mode=""
        />
    </div>
  </div> -->
  <!-- <div
    v-for="(img, index) in imgList"
    :key="index"
    :class="index === active ? 'appear' : 'hide'"
    >
    <div id="img-container">
      <img id="img" :src="base+img.src" alt="" />
      <div id="mask" :class="img.clip.length ? 'occur' : ''"></div>
      <div id="clip" :class="img.clip.length ? 'blink' : ''" :style="{clip: img.clip}">
        <img id="img" :src="base+img.src" alt="" />
      </div>
      <div id="pic-guide">
        <bubble id="bubble" :class="img.clip.length ? 'zoomIn' : ''" :msg="msg" />
        <img
          id="guide-svg"
          :class="img.clip.length ? 'slideInLeft' : ''"
          src="../assets/svg/guideman.png"
          mode=""
        />
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="stylus">

#canvas {
  position: absolute
  left: 50%
  transform: translateX(-50%)
}

#pic-guide {
  #guide-svg {
      position absolute
      bottom: -100px
      left: -0.625rem
      width: 100px
      opacity 0
  }
  #bubble {
      position: absolute
      left: 2.5rem
      bottom: 4.5rem
      opacity 0
  }
}


:root {
  width: 18.75rem
}

#guide {
    margin: 5px;
    color: brown;
    font-weight: bolder;
    text-align: center;
}

#img-container {
    position: relative;
    display: block
    width: var(width)
    margin: 0 auto
    #clip {
        position: absolute;
        top: 0;
        left: 0;
        // clip: rect(730px, 90px, 1000px, 40px);
        z-index: 10;
        opacity 0
    }
    #mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .3);
        opacity 0
    }
    #pic-guide {
        position: relative;
        #guide-svg {
            position absolute
            bottom: -100px
            width: 100px
            left: -50px
            opacity 0
        }
        #bubble {
            position: absolute
            bottom: 4.5rem
            opacity 0
        }
    }
    #img {
      width: 100%;
    }
}

.appear {
    display: block
}

.hide {
    display: none
}

@keyframes occur {
    from {
        opacity 0
    } to {
        opacity 1
    }
}
@keyframes blink {
    0% {
        opacity 1
    } 25% {
        opacity 0
    } 50% {
        opacity 1
    } 75% {
        opacity 0
    } 100% {
        opacity 1
    }
}

.occur {
    animation: occur 1s linear forwards
}

.blink {
    animation: occur 1s, blink 1s linear 1s forwards
}

.slideInLeft {
    animation: occur 1s .2s forwards, slideInLeft .5s linear .2s forwards
}

.zoomIn {
    animation: occur 1s .2s forwards, zoomIn .5s linear .2s forwards
}
</style>
