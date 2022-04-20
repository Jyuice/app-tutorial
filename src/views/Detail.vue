<script lang="ts" setup>
import map from '../../module/catalogue'
import { useRouter } from 'vue-router'
let router = useRouter()

const appName:string = window.history.state.current.split('?')[1].split('=')[1]


interface Tree {
  label: string,
  children?: Tree[]
  target?: string
}

const handleNodeClick = (data: Tree) => {
  if(data.target) {
    router.push(data.target)
  }
}

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
          <el-tree :data="map.get(appName)" :props="defaultProps" @node-click="handleNodeClick" />
      </div>
  </div>
</template>


<style scoped>
#question-list {
    margin-top: 20px;
}
</style>