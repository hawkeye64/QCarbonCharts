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
				"value": 65000
      },
      {
        "group": "More",
        "value": 29123
      },
      {
        "group": "Sold",
        "value": 35213
      },
      {
        "group": "Restocking",
        "value": 51213
      },
      {
        "group": "Misc",
        "value": 16932
      }
    ]
    const options = {
      "title": "Horizontal simple bar (discrete)",
      "axes": {
        "left": {
          "mapsTo": "group",
          "scaleType": "labels"
        },
        "bottom": {
          "mapsTo": "value"
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
