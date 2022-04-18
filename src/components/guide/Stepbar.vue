<script setup>
let props = defineProps({
    active: Number,
    account: Number
})
</script>


<template>
  <el-steps :active="active" finish-status="success" align-center>
    <el-step v-for="i in account" :key="i" :title="'第' + i + '步'" />
  </el-steps>
</template>