<template>
  <q-page padding>
    <q-charts-combo
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsCombo from 'quasar-ui-qcharts/src/components/QChartsCombo'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsCombo
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
        "date": "2019-01-01T07:00:00.000Z",
        "value": 20000
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
        "date": "2019-01-13T07:00:00.000Z",
        "value": 30213
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
      },
      {
        "group": "Temperature",
        "date": "2019-01-01T07:00:00.000Z",
        "temp": 77
      },
      {
        "group": "Temperature",
        "date": "2019-01-05T07:00:00.000Z",
        "temp": 65
      },
      {
        "group": "Temperature",
        "date": "2019-01-08T07:00:00.000Z",
        "temp": 80
      },
      {
        "group": "Temperature",
        "date": "2019-01-13T07:00:00.000Z",
        "temp": 43
      },
      {
        "group": "Temperature",
        "date": "2019-01-17T07:00:00.000Z",
        "temp": 53
      }
    ]

    const options = {
      "title": "Combo (Stacked Area + Line)",
      "axes": {
        "left": {
          "title": "left",
          "stacked": true,
          "mapsTo": "value",
          "titleOrientation": "right"
        },
        "bottom": {
          "scaleType": "time",
          "mapsTo": "date"
        },
        "right": {
          "title": "right",
          "scaleType": "linear",
          "mapsTo": "temp",
          "correspondingDatasets": [
            "Temperature"
          ],
          "titleOrientation": "left"
        }
      },
      "curve": "curveMonotoneX",
      "comboChartTypes": [
        {
          "type": "stacked-area",
          "options": {
            "points": {
              "enabled": false
            }
          },
          "correspondingDatasets": [
            "Dataset 1",
            "Dataset 2",
            "Dataset 3"
          ]
        },
        {
          "type": "line",
          "correspondingDatasets": [
            "Temperature"
          ]
        }
      ],
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
