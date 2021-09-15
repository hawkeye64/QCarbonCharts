<template>
  <q-page padding>
    <q-charts-combo
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsCombo from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsCombo'

export default {
  components: {
    QCarbonChartsCombo
  },
  setup() {
    const data = [
      {
        "group": "Paris",
        "key": "Monday",
        "temp": 25
      },
      {
        "group": "Paris",
        "key": "Tuesday",
        "temp": 33
      },
      {
        "group": "Paris",
        "key": "Wednesday",
        "temp": 27
      },
      {
        "group": "Paris",
        "key": "Thursday",
        "temp": 25
      },
      {
        "group": "Paris",
        "key": "Friday",
        "temp": 32
      },
      {
        "group": "Marseille",
        "key": "Monday",
        "temp": 16
      },
      {
        "group": "Marseille",
        "key": "Tuesday",
        "temp": 22
      },
      {
        "group": "Marseille",
        "key": "Wednesday",
        "temp": 20
      },
      {
        "group": "Marseille",
        "key": "Thursday",
        "temp": 22
      },
      {
        "group": "Marseille",
        "key": "Friday",
        "temp": 25
      },
      {
        "group": "Avg Temperature",
        "key": "Monday",
        "temp": 20.5
      },
      {
        "group": "Avg Temperature",
        "key": "Tuesday",
        "temp": 27.5
      },
      {
        "group": "Avg Temperature",
        "key": "Wednesday",
        "temp": 23.5
      },
      {
        "group": "Avg Temperature",
        "key": "Thursday",
        "temp": 23.5
      },
      {
        "group": "Avg Temperature",
        "key": "Friday",
        "temp": 28.5
      },
      {
        "group": "Attendance",
        "key": "Monday",
        "value": 2650
      },
      {
        "group": "Attendance",
        "key": "Tuesday",
        "value": 2553
      },
      {
        "group": "Attendance",
        "key": "Wednesday",
        "value": 3433
      },
      {
        "group": "Attendance",
        "key": "Thursday",
        "value": 3754
      },
      {
        "group": "Attendance",
        "key": "Friday",
        "value": 3744
      }
    ]

    const options = {
      "title": "Combo (Line + Scatter + Bar)",
      "axes": {
        "left": {
          "mapsTo": "value",
          "title": "Attendance"
        },
        "bottom": {
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "right": {
          "title": "Temperature (°C)",
          "mapsTo": "temp",
          "scaleType": "linear",
          "correspondingDatasets": [
            "Avg Temperature",
            "Paris",
            "Marseille"
          ]
        }
      },
      "curve": "curveMonotoneX",
      "comboChartTypes": [
        {
          "type": "simple-bar",
          "correspondingDatasets": [
            "Attendance"
          ]
        },
        {
          "type": "scatter",
          "correspondingDatasets": [
            "Paris",
            "Marseille"
          ]
        },
        {
          "type": "line",
          "correspondingDatasets": [
            "Avg Temperature"
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
