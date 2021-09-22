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
        "value": 0
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 57312
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 21432
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-15T07:00:00.000Z",
        "value": 70323
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 21300
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 15000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 39213
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 61213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 10
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 37312
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 51432
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 40323
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 31300
      }
    ]
    const options = {
      "title": "Area (time series)",
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
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
