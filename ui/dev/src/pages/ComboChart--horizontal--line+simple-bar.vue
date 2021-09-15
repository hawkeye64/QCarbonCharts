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
      "title": "Horizontal Combo (Line + Simple bar)",
      "axes": {
        "top": {
          "mapsTo": "value",
          "scaleType": "linear",
          "title": "USA Summer School Attendance"
        },
        "bottom": {
          "mapsTo": "temp",
          "scaleType": "linear",
          "title": "Temperature (°F)",
          "correspondingDatasets": [
            "Temperature"
          ]
        },
        "left": {
          "title": "Day of the Week",
          "mapsTo": "date",
          "scaleType": "labels"
        }
      },
      "comboChartTypes": [
        {
          "type": "simple-bar",
          "options": {},
          "correspondingDatasets": [
            "School A"
          ]
        },
        {
          "type": "line",
          "options": {},
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
