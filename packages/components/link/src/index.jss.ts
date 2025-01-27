import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useRgbColor } from '@fusion-ui-vue/theme'
import type { LinkProps } from './link'

const useCss: ComponentStylingHook<LinkProps> = props =>
  computed(() => {
    const $colorRgb = useRgbColor(
      props,
      'color',
      'var(--md-sys-color-primary-rgb)'
    )
    const linkStyle = css`
      --fn-link-color-rgb: ${$colorRgb.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(linkStyle, styleFromCs)
  })

export default useCss
