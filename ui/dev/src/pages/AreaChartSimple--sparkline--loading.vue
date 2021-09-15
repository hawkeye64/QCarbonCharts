<template>
  <q-page padding>
    <q-charts-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsAreaSimple from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsAreaSimple'

export default {
  components: {
    QCarbonChartsAreaSimple
  },
  setup() {
    const data = []

    const options = {
      "title": "Sparkline (loading)",
      "axes": {
        "bottom": {
          "visible": false,
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "visible": false,
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
      },
      "grid": {
        "x": {
          "enabled": false
        },
        "y": {
          "enabled": false
        }
      },
      "legend": {
        "enabled": false
      },
      "tooltip": {
        "enabled": false
      },
      "points": {
        "enabled": false
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
