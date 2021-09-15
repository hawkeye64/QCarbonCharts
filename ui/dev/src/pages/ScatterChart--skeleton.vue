<template>
  <q-page padding>
    <q-charts-scatter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsScatter from 'quasar-ui-qcharts/src/components/QChartsScatter'

export default {
  components: {
    QChartsScatter
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
