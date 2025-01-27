import { useTheme } from '@fusion-ui-vue/theme'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import {
  CorePalette,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities'
import type { AcceptableColor, Theme } from '../core'

const genColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T,
  theme: Ref<Theme>
) => {
  return computed(() => {
    const color: AcceptableColor = props?.[key]

    if (typeof color === 'function') {
      return color(theme.value)
    }
    if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `var(--md-sys-color-${_color})`
    }
    return color
  })
}

const genOnColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T,
  theme: Ref<Theme>
) => {
  return computed(() => {
    const color: AcceptableColor = props?.[key]

    let computedColor: string
    if (typeof color === 'function') {
      computedColor = color(theme.value)
    } else if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return color.startsWith('on')
        ? `var(--md-sys-color-${_color})`
        : `var(--md-sys-color-on-${_color})`
    } else if (color.startsWith('#')) {
      computedColor = color
    } else {
      return color
    }

    const tones = CorePalette.of(argbFromHex(computedColor)).a1
    const onColor =
      theme.value.mode === 'dark' ? tones.tone(20) : tones.tone(100)
    return hexFromArgb(onColor)
  })
}

/**
 * The function to compute color from props
 * The props.color can be any key in theme.schemes
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" | HexColor (e.g. "#fff")
 * Use this function to get the final color value
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T | undefined | null} key The key of props
 * Set the key to null or undefined to use default color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
export const useColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T
) => {
  const theme = useTheme()
  if (
    !key ||
    !(key in props) ||
    !['string', 'function'].includes(typeof props[key])
  ) {
    return [ref(null), ref(null)]
  }

  const color = genColor(props, key, theme)
  const onColor = genOnColor(props, key, theme)
  return [color, onColor]
}
