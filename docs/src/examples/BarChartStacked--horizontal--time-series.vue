<template>
  <q-page padding>
    <q-charts-bar-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarStacked from 'quasar-ui-qcharts/src/components/QChartsBarStacked'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsBarStacked
  },
  setup() {
		const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 49213
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 51213
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-03T07:00:00.000Z",
        "value": 75000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 57312
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 21432
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-15T07:00:00.000Z",
        "value": 70323
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 21300
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 15000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 39213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 61213
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 10
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 37312
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 51432
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-15T07:00:00.000Z",
        "value": 40323
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 31300
      }
    ]
    const options = {
      "title": "Horizontal stacked bar (time series)",
      "axes": {
        "left": {
          "scaleType": "time",
          "mapsTo": "date"
        },
        "bottom": {
          "stacked": true,
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
