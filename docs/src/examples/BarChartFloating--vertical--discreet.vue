<template>
  <q-page padding>
    <q-charts-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsBarSimple from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsBarSimple'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsBarSimple
  },
  setup() {
		const data = [
      {
        "group": "Qty",
        "value": [
          30000,
          65000
        ]
      },
      {
        "group": "More",
        "value": [
          15000,
          29123
        ]
      },
      {
        "group": "Sold",
        "value": [
          22000,
          35213
        ]
      },
      {
        "group": "Restocking",
        "value": [
          28000,
          51213
        ]
      },
      {
        "group": "Misc",
        "value": [
          3000,
          16932
        ]
      }
    ]
    const options = {
      "title": "Floating vertical bar (discrete)",
      "axes": {
        "left": {
          "mapsTo": "value",
          "includeZero": false
        },
        "bottom": {
          "mapsTo": "group",
          "scaleType": "labels"
        }
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
