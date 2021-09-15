<template>
  <q-page padding>
    <q-charts-line
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsLine from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsLine'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsLine
  },
  setup() {
    const data = []

    const options = {
      "title": "Line (skeleton)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
      },
      "curve": "curveMonotoneX",
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
