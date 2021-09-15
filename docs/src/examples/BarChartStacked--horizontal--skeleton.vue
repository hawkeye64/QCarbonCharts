<template>
  <q-page padding>
    <q-charts-bar-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsBarStacked from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsBarStacked'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsBarStacked
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal stacked bar (skeleton)",
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
