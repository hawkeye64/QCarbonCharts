<template>
  <q-page padding>
    <qcc-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBarSimple from 'quasar-ui-qcarboncharts/src/components/QccBarSimple'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccBarSimple
  },
  setup() {
		const data = [
      {
        "group": "Qty",
        "date": "2019-01-01T00:00:00.000Z",
        "value": [
          10000,
          41000
        ]
      },
      {
        "group": "More",
        "date": "2019-01-02T00:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Sold",
        "date": "2019-01-03T00:00:00.000Z",
        "value": 30000
      },
      {
        "group": "Restocking",
        "date": "2019-01-06T00:00:00.000Z",
        "value": [
          22000,
          69213
        ]
      },
      {
        "group": "Misc",
        "date": "2019-01-07T00:00:00.000Z",
        "value": [
          3500,
          71213
        ]
      }
    ]
    const options = {
      "title": "Horizontal floating bar (time series)",
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
