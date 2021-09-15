<template>
  <q-page padding>
    <q-charts-area-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsAreaStacked from 'quasar-ui-qcharts/src/components/QChartsAreaStacked'

export default {
  components: {
    QChartsAreaStacked
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
        "date": "2019-01-05T07:00:00.000Z",
        "value": 25000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 60000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 55213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 30000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 40000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 60213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 25213
      }
    ]
    const options = {
      "title": "Stacked area (time series with uneven data)",
      "axes": {
        "left": {
          "stacked": true,
          "mapsTo": "value"
        },
        "bottom": {
          "scaleType": "time",
          "mapsTo": "date"
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
