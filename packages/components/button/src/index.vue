<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { iconSize } from '@fusion-ui-vue/constants'
import FnButtonBase from '../../button-base'
import FnRipple from '../../ripple'
import { buttonProps } from './button'
import useCss from './index.jss'

const props = defineProps(buttonProps)
const ns = useNamespace('button')
const cssClass = useCss(props, ns)

const classList = computed(() => {
  const { variant, shape, size } = props
  return [ns.b(), ns.m(size), ns.m(shape), ns.m(variant)]
})
</script>

<template>
  <fn-button-base :class="[...classList, `title-${props.size}`, cssClass]">
    <slot v-bind="{ size: iconSize[props.size] }" />
    <fn-ripple
      v-if="!props.disableRipple"
      :color="props.variant === 'filled' ? undefined : props.color"
    />
  </fn-button-base>
</template>
