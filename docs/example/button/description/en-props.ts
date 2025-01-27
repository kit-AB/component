import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'variant',
    remark: 'Button variant',
    type: 'Enum',
    optional: ['text', 'filled', 'outlined'],
    default: 'filled',
  },
  {
    name: 'size',
    remark: 'Button size',
    type: 'Enum',
    optional: ['small', 'medium', 'large'],
    default: 'medium',
  },
  {
    name: 'shape',
    remark: 'Button shape',
    type: 'Enum',
    optional: ['rounded', 'fullRounded', 'square'],
    default: 'rounded',
  },
  {
    name: 'color',
    remark: 'Customize the color of buttons',
    type: 'Enum',
    optional: ['ThemeSchemes', 'ThemeCallBack', 'String'],
    default: 'primary',
  },
  {
    name: 'disableRipple',
    remark: 'Disable the ripple effect',
    type: 'Boolean',
    default: 'false',
  },
  {
    name: 'disableElevation',
    remark: 'Disable the elevation',
    type: 'Boolean',
    default: 'false',
  },
]

export default list
