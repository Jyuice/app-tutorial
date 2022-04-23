<script setup>
import { reactive, onUnmounted } from 'vue'
const props = defineProps({
    width: {
        type: Number,
        default: 390 * 0.9
    },
    height: {
        type: Number,
        default: 844 * 0.9
    }
})

const data = reactive({
    balls: ['red', 'blue', 'green', 'purple', 'orange']
})

let timer = setInterval(() => {
    data.balls.push(data.balls.shift())
},1000)

onUnmounted(() => {
    clearInterval(timer)
    timer = null
})

</script>

<template>
  <div id="wrap" :style="{'--width': width+1+'px', '--height': height+1+'px'}">
    <div class="inner">
        <div v-for="(ball, index) in data.balls" :class="['item', ball, !index?'head':'', index===data.balls.length-1?'tail':'']" :key="index"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

#wrap {
    position: absolute
    left: 50%
    transform: translate(-50%)
    // width: var(--width)
    width: 100vw
    // height: var(--height)
    height: 101vh
    margin-top: 0
    background: #fff
    z-index 99

    .inner {
        display: flex
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        border-top: 1px solid #000
    }

    .item {
        position relative
        width: .0625rem
        height: 5rem
        margin: 0 .625rem
        background: #333
        transform-origin: 0% 0%
        &::after {
            content: ''
            position: absolute
            width: 1.25rem
            height: 1.25rem
            border-radius: 50%
            bottom: -1.25rem
            left: -0.625rem
        }
    }
    .head {
        animation: left-first-rotate .5s ease 1, left-rotate 1s 1s ease infinite
    }
    .tail {
        animation: right-first-rotate .5s .5s ease 1, right-rotate 1s 1.5s ease infinite
    }
    .red {
        &::after {
            background: #f40
        }
    }
    .blue {
        &::after {
            background: #26A69A
        }
    }
    .green {
        &::after {
            background: #9CCC65
        }
    }
    .purple {
        &::after {
            background: #9575CD
        }
    }
    .orange {
        &::after {
            background: #FF6F00
        }
    }
}

@keyframes rotate {
    to {
        transform: rotate(0)
    }
}

@keyframes left-first-rotate {
    50% {
        transform: rotateZ(45deg)
    } 100% {
        transform: rotateZ(0)
    } 
}

@keyframes left-rotate {
    25% {
        transform: rotateZ(45deg)
    } 50% {
        transform: rotateZ(0)
    } 100% {
        transform: rotateZ(0)
    }
}

@keyframes right-first-rotate {
    50% {
        transform: rotateZ(-45deg)
    } 100% {
        transform: rotateZ(0)
    }
}

@keyframes right-rotate {
    25% {
        transform: rotateZ(-45deg)
    } 50% {
        transform: rotateZ(0)
    } 100% {
        transform: rotateZ(0)
    }
}

</style>