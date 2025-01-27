import { withInstall } from '../install'
import ButtonBase from './src/index.vue'

export const FnButtonBase = withInstall(ButtonBase, 'FnButtonBase')
FnButtonBase.name = 'FnButtonBase'
export default FnButtonBase
export * from './src/button-base'
export type ButtonBaseInstance = InstanceType<typeof ButtonBase>
