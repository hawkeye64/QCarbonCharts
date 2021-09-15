import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-qcarboncharts'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
