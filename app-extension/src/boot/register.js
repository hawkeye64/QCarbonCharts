import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-qcharts'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
