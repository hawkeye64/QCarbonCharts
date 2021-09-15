<template>
  <q-page padding>
    <q-charts-combo
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsCombo from 'quasar-ui-qcharts/src/components/QChartsCombo'

export default {
  components: {
    QChartsCombo
  },
  setup() {
    const data = [
      {
        "group": "School A",
        "date": "Monday",
        "value": 10000
      },
      {
        "group": "School A",
        "date": "Tuesday",
        "value": 65000
      },
      {
        "group": "School A",
        "date": "Wednesday",
        "value": 30000
      },
      {
        "group": "School A",
        "date": "Thursday",
        "value": 49213
      },
      {
        "group": "School A",
        "date": "Friday",
        "value": 49213
      },
      {
        "group": "Temperature",
        "date": "Monday",
        "temp": 70
      },
      {
        "group": "Temperature",
        "date": "Tuesday",
        "temp": 75
      },
      {
        "group": "Temperature",
        "date": "Wednesday",
        "temp": 31
      },
      {
        "group": "Temperature",
        "date": "Thursday",
        "temp": 31
      },
      {
        "group": "Temperature",
        "date": "Friday",
        "temp": 43
      }
    ]

    const options = {
      "title": "Combo (Line + Simple bar) - custom configs",
      "axes": {
        "left": {
          "mapsTo": "value",
          "scaleType": "linear",
          "title": "USA Summer School Attendance"
        },
        "right": {
          "mapsTo": "temp",
          "scaleType": "linear",
          "title": "Temperature (°F)",
          "correspondingDatasets": [
            "Temperature"
          ]
        },
        "bottom": {
          "title": "Day of the Week",
          "mapsTo": "date",
          "scaleType": "labels"
        }
      },
      "comboChartTypes": [
        {
          "type": "simple-bar",
          "correspondingDatasets": [
            "School A"
          ]
        },
        {
          "type": "line",
          "options": {
            "points": {
              "radius": 5
            }
          },
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
