<script lang="ts" setup>
import { useRouter } from 'vue-router'
let router = useRouter()

const appName:string = window.history.state.current.split('?')[1].split('=')[1]

interface Tree {
  label: string
  children?: Tree[]
  target?: string
}

const handleNodeClick = (data: Tree) => {
  if(data.target) {
    router.push(data.target)
  }
}

const data: Tree[] = [
  {
    label: '我想找客服',
    children: [
      {
        label: '我去哪里可以找到客服？',
        target: '/resolve?questionId=01'
      },
      {
        label: '客服叫我拍照、录像怎么办？',
        target: '/resolve?questionId=02'
      },
      {
        label: '我和客服的聊天记录怎么找？',
        target: '/resolve?questionId=03'
      },
    ],
  },
  {
    label: '我打开淘宝的时候领了一个红包',
    children: [
      {
        label: '我怎么才能用这个红包？',
        target: '/resolve?questionId=11'
      },
      {
        label: '我不小心退出了，怎么找回红包的界面？',
        target: '/resolve?questionId=12'
      },
    ],
  },
  {
    label: '我想查一下我买的东西',
    children: [
      {
        label: '我买的东西什么时候到？',
        target: '/resolve?questionId=21'
      },
      {
        label: '我想看我以前买的东西',
        target: '/resolve?questionId=22'
      },
    ],
  },
  {
      label: "我忘记收藏了，怎么找看过的商品？",
      target: '/resolve?questionId=31'
  },
  {
      label: "我忘记领淘金币了怎么办？",
      target: '/resolve?questionId=41'
  }
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<template>
  <div id="wrap">
      <div id="guide">
          您想看哪方面的功能呢？
      </div>
      <div id="question-list">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
      </div>
  </div>
</template>


<style scoped>
#question-list {
    margin-top: 20px;
}
</style>