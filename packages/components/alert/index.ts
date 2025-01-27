import { withInstall } from '../install'
import Alert from './src/index.vue'

export const FnAlert = withInstall(Alert, 'FnAlert')
FnAlert.name = 'FnAlert'
export default FnAlert
export * from './src/alert'
export type AlertInstance = InstanceType<typeof Alert>
