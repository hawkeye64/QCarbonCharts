<template>
  <q-page padding>
    <q-charts-line
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsLine from 'quasar-ui-qcharts/src/components/QChartsLine'

export default {
  components: {
    QChartsLine
  },
  setup() {
    const data = [
      {
        "group": "Temperature",
        "date": "2019-01-01T07:00:00.000Z",
        "temp": 23
      },
      {
        "group": "Temperature",
        "date": "2019-02-01T07:00:00.000Z",
        "temp": 15
      },
      {
        "group": "Temperature",
        "date": "2019-03-01T07:00:00.000Z",
        "temp": 24
      },
      {
        "group": "Temperature",
        "date": "2019-04-01T06:00:00.000Z",
        "temp": 33
      },
      {
        "group": "Temperature",
        "date": "2019-05-01T06:00:00.000Z",
        "temp": 23
      },
      {
        "group": "Temperature",
        "date": "2019-06-01T06:00:00.000Z",
        "temp": 32
      },
      {
        "group": "Temperature",
        "date": "2019-07-01T06:00:00.000Z",
        "temp": 23
      },
      {
        "group": "Rainfall",
        "date": "2019-01-01T07:00:00.000Z",
        "rainfall": 50
      },
      {
        "group": "Rainfall",
        "date": "2019-02-01T07:00:00.000Z",
        "rainfall": 65
      },
      {
        "group": "Rainfall",
        "date": "2019-03-01T07:00:00.000Z",
        "rainfall": 35
      },
      {
        "group": "Rainfall",
        "date": "2019-04-01T06:00:00.000Z",
        "rainfall": 43
      },
      {
        "group": "Rainfall",
        "date": "2019-05-01T06:00:00.000Z",
        "rainfall": 53
      },
      {
        "group": "Rainfall",
        "date": "2019-06-01T06:00:00.000Z",
        "rainfall": 19
      },
      {
        "group": "Rainfall",
        "date": "2019-07-01T06:00:00.000Z",
        "rainfall": 13
      }
    ]

    const options = {
      "title": "Line + Line (dual axes)",
      "axes": {
        "left": {
          "title": "Temperature (°C)",
          "mapsTo": "temp"
        },
        "bottom": {
          "scaleType": "time",
          "mapsTo": "date",
          "title": "Date"
        },
        "right": {
          "title": "Rainfall (mm)",
          "mapsTo": "rainfall",
          "correspondingDatasets": [
            "Rainfall"
          ]
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
