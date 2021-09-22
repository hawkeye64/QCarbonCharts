<template>
  <q-page padding>
    <qcc-bar-grouped
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBarGrouped from 'quasar-ui-qcarboncharts/src/components/QccBarGrouped'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccBarGrouped
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal grouped bar (skeleton)",
      "axes": {
        "left": {
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "bottom": {
          "mapsTo": "value"
        }
      },
      "data": {
        "loading": true
      },
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
