<template>
  <q-page padding>
    <q-charts-scatter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsScatter from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsScatter'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsScatter
  },
  setup() {
    const data = []

    const options = {
      "title": "Scatter (skeleton)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "scaleType": "time",
          "mapsTo": "date"
        },
        "left": {
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
