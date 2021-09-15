<template>
  <q-page padding>
    <q-charts-area-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsAreaStacked from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsAreaStacked'

export default {
  components: {
    QCarbonChartsAreaStacked
  },
  setup() {
		const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T00:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-05T00:00:00.000Z",
        "value": 65000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T00:00:00.000Z",
        "value": 10000
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-13T00:00:00.000Z",
        "value": 49213
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-17T00:00:00.000Z",
        "value": 51213
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T00:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-05T00:00:00.000Z",
        "value": 25000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T00:00:00.000Z",
        "value": 60000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-13T00:00:00.000Z",
        "value": 30213
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-17T00:00:00.000Z",
        "value": 55213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-01T00:00:00.000Z",
        "value": 30000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-05T00:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T00:00:00.000Z",
        "value": 40000
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T00:00:00.000Z",
        "value": 60213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-17T00:00:00.000Z",
        "value": 25213
      }
    ]
    const options = {
      "title": "Stacked area (time series)",
      "axes": {
        "left": {
          "stacked": true,
          "scaleType": "linear",
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
