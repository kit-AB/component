<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { AccessibilityFilled, AutorenewFilled, BookFilled } = pkg
// import {
//   AccessibilityFilled,
//   AutorenewFilled,
//   BookFilled,
// } from 'fusion-ui-iconify'
</script>

<template>
  <fn-avatar>
    <book-filled />
  </fn-avatar>
  <fn-avatar background-color="#dc3964" color="white">
    <accessibility-filled />
  </fn-avatar>
  <fn-avatar background-color="#60ae57" color="white">
    <autorenew-filled />
  </fn-avatar>
</template>
