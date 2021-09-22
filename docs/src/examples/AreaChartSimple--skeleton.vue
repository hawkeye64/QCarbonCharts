<template>
  <q-page padding>
    <qcc-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccAreaSimple from 'quasar-ui-qcarboncharts/src/components/QccAreaSimple'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccAreaSimple
  },
  setup() {
		const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 47263,
        "min": 40000,
        "max": 50000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 14178,
        "min": 10000,
        "max": 20000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 23094,
        "min": 10000,
        "max": 25000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 45281,
        "min": 42000,
        "max": 50000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-19T07:00:00.000Z",
        "value": -63954,
        "min": -70000,
        "max": -10000
      }
    ]
    const options = {
      "title": "Area (skeleton)",
      "bounds": {
        "upperBoundMapsTo": "max",
        "lowerBoundMapsTo": "min"
      },
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "mapsTo": "value",
          "scaleType": "linear"
        }
      },
      "curve": "curveNatural",
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
