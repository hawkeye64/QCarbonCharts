<template>
  <q-page padding>
    <q-charts-line
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsLine from 'quasar-ui-qcharts/src/components/QChartsLine'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsLine
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T07:00:00.000Z",
        "value": -10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-01T12:00:00.000Z",
        "value": -12000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-01T17:00:00.000Z",
        "value": -14000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-02T07:00:00.000Z",
        "value": -25000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-02T09:00:00.000Z",
        "value": -26000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-03T07:00:00.000Z",
        "value": -10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-03T12:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-03T17:00:00.000Z",
        "value": 12000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 45000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-07T07:00:00.000Z",
        "value": 49000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-07T22:00:00.000Z",
        "value": 45000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-09T07:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-09T12:00:00.000Z",
        "value": 52000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-09T22:00:00.000Z",
        "value": 55000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-10T07:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-12T07:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 80000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-14T17:00:00.000Z",
        "value": 85000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-15T14:00:00.000Z",
        "value": 90000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-16T01:00:00.000Z",
        "value": 70000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T10:00:00.000Z",
        "value": 22000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T23:00:00.000Z",
        "value": 24000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 35000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-02T14:00:00.000Z",
        "value": 36000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-03T07:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-03T13:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-04T01:00:00.000Z",
        "value": 22000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 62000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 52000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-07T07:00:00.000Z",
        "value": 52000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-07T22:00:00.000Z",
        "value": 52000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-09T07:00:00.000Z",
        "value": 60000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-09T12:00:00.000Z",
        "value": 62000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-09T17:00:00.000Z",
        "value": 62000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-12T07:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-14T07:00:00.000Z",
        "value": 40000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-15T12:00:00.000Z",
        "value": 45000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-15T17:00:00.000Z",
        "value": 35000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-16T01:00:00.000Z",
        "value": 30000
      }
    ]

    const options = {
      "title": "Line (dense time series)",
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
      "curve": "curveMonotoneX",
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
