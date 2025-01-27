import type { PropTableItem } from '../../../.vitepress/components/table-block/src/table'
const list: PropTableItem[] = [
  {
    name: 'severity',
    remark: 'Alert Severe level',
    type: 'Enum',
    optional: ['error', 'warning', 'info', 'success'],
    default: '---',
  },
  {
    name: 'fn-typography',
    remark: 'Provide title style',
    type: '--',
    default: '--',
  },

  {
    name: 'variant',
    remark: ' outlined & filled ',
    type: 'String',
    default: '---',
  },
  {
    name: 'cs',
    remark: 'Flexible color configuration',
    type: 'Enum',
    optional: ['String', 'Object'],
    default: '--',
  },
]

export default list
