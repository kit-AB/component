<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { HomeFilled } = pkg
// import { HomeFilled } from 'fusion-ui-iconify'
</script>

<template>
  <div flex gap-5 style="align-items: flex-end">
    <home-filled />
    <home-filled :size="24" />
    <home-filled size="36" />
    <home-filled size="3em" />
  </div>
</template>
