<template>
  <q-page padding>
    <q-charts-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarSimple from 'quasar-ui-qcharts/src/components/QChartsBarSimple'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsBarSimple
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
          36932
        ]
      }
    ]
    const options = {
      "title": "Floating horizontal bar (discrete)",
      "axes": {
        "left": {
          "mapsTo": "group",
          "scaleType": "labels"
        },
        "bottom": {
          "mapsTo": "value",
          "includeZero": false
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
