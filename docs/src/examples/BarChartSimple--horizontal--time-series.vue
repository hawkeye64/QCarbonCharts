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
        "date": "2019-01-01T07:00:00.000Z",
        "value": 10000
      },
      {
        "group": "More",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Sold",
        "date": "2019-01-03T07:00:00.000Z",
        "value": 30000
      },
      {
        "group": "Restocking",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 49213
      },
      {
        "group": "Misc",
        "date": "2019-01-07T07:00:00.000Z",
        "value": 51213
      }
    ]
    const options = {
      "title": "Horizontal simple bar (time series)",
      "axes": {
        "left": {
          "mapsTo": "date",
          "scaleType": "time"
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
