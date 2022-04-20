<script setup>
import bubble from "./Bubble.vue";
import { onMounted, onUpdated, ref } from "vue";

const prop = defineProps({
  current: Object
})

// canvas的参考尺寸
const standardWidth = 390 * 0.9
const standardHeight = 844 * 0.9
let canvasWidth = standardWidth
let canvasHeight = standardHeight
let img = new Image()
let canvas = null
let ctx = null
let offsetTop = 0
let offsetLeft = 0

// 响应式，获取当前尺寸相对于参考尺寸的比例 
const getProportion = (w, h) => {
  const proportionX = w / standardWidth
  const proportionY = h / standardHeight
  return [proportionX, proportionY]
}

const pageWidth = document.documentElement.clientWidth
const pageHeight = document.documentElement.clientHeight

// 设置canvas的宽高为当前页面的宽高的90% 如果是pad或者PC就用默认尺寸
if(pageWidth < pageHeight) {
  canvasWidth = pageWidth * 0.9
  canvasHeight = pageHeight * 0.9
}

onMounted(async() => {
  canvas = document.getElementById('canvas')
  
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  // canvas 距离页面左上角的距离
  offsetTop = canvas.offsetTop
  offsetLeft = canvas.getBoundingClientRect().left

  ctx = canvas.getContext('2d')

  // ctx.fillStyle = "rgba(0,0,0, .3)";
  // ctx.fillRect (0, 0, canvasWidth, canvasHeight);

  img.onload = function(){
    ctx.drawImage(img,0,0, canvasWidth, canvasHeight);
  }
  await changeImg()
  await showMask()
  
  ctx.globalCompositeOperation = "destination-over"
})

onUpdated(async() => {
  await changeImg()
  await showMask()
})

// let base = ref('../src/assets/')
const appName = window.history.state.current.split('?')[1].slice(4, 6)

const changeImg = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  if(process.env.NODE_ENV==='development') {
    img.src = `../src/assets/${appName}/` + prop.current.src
  } else {
    img.src = `./assets/${appName}/` + prop.current.src
  }
  // ctx.save()
}

const showMask = () => {
  if(prop.current.clip) {
    let [proportionX, proportionY] = getProportion(canvasWidth, canvasHeight)
    // ctx.restore()
    // ctx.globalCompositeOperation = "source-over"
    ctx.fillStyle = "rgba(0,0,0, .3)";
    ctx.fillRect (0, 0, canvasWidth, canvasHeight);
    // eval(prop.current.clip)
    ctx.clearRect(...prop.current.clip.map((item, index) => {
      if (index % 2) { // x
        return item * proportionY
      } else { // y
        return item * proportionX
      }
    }))
    // ctx.globalCompositeOperation = "destination-over"
  }
}

var x = 0
var y = 0

const getClip = e => {
  if(!x) {
    x = e.pageX-offsetLeft
    y = e.pageY-offsetTop
    console.log(x + ',' + y)
  } else {
    let cx = e.pageX-offsetLeft
    let cy = e.pageY-offsetTop
    console.log(',' + String(cx-x) + ',' + String(cy-y))
    x = 0
    y = 0
  }
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
