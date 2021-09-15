<template>
  <q-page padding>
    <q-charts-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsAreaSimple from 'quasar-ui-qcharts/src/components/QChartsAreaSimple'

export default {
  components: {
    QChartsAreaSimple
  },
  setup() {
		const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T00:00:00.000Z",
        "value": 0
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-06T00:00:00.000Z",
        "value": -37312
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T00:00:00.000Z",
        "value": -22392
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-15T00:00:00.000Z",
        "value": -52576
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-19T00:00:00.000Z",
        "value": 20135
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T00:00:00.000Z",
        "value": 47263
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-05T00:00:00.000Z",
        "value": 14178
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T00:00:00.000Z",
        "value": 23094
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-13T00:00:00.000Z",
        "value": 45281
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-19T00:00:00.000Z",
        "value": -63954
      }
    ]
    const options = {
      "title": "Area (time series - natural curve)",
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
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
