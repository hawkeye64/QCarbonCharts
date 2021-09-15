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
        "group": "Florida",
        "key": "Monday",
        "value": 65000
      },
      {
        "group": "Florida",
        "key": "Tuesday",
        "value": 29123
      },
      {
        "group": "Florida",
        "key": "Wednesday",
        "value": 35213
      },
      {
        "group": "Florida",
        "key": "Thursday",
        "value": 51213
      },
      {
        "group": "Florida",
        "key": "Friday",
        "value": 16932
      },
      {
        "group": "California",
        "key": "Monday",
        "value": 32432
      },
      {
        "group": "California",
        "key": "Tuesday",
        "value": 21312
      },
      {
        "group": "California",
        "key": "Wednesday",
        "value": 56456
      },
      {
        "group": "California",
        "key": "Thursday",
        "value": 21312
      },
      {
        "group": "California",
        "key": "Friday",
        "value": 34234
      },
      {
        "group": "Tokyo",
        "key": "Monday",
        "value": 12312
      },
      {
        "group": "Tokyo",
        "key": "Tuesday",
        "value": 23232
      },
      {
        "group": "Tokyo",
        "key": "Wednesday",
        "value": 34232
      },
      {
        "group": "Tokyo",
        "key": "Thursday",
        "value": 12312
      },
      {
        "group": "Tokyo",
        "key": "Friday",
        "value": 34234
      },
      {
        "group": "Temperature",
        "key": "Monday",
        "temp": 23
      },
      {
        "group": "Temperature",
        "key": "Tuesday",
        "temp": 21
      },
      {
        "group": "Temperature",
        "key": "Wednesday",
        "temp": 32
      },
      {
        "group": "Temperature",
        "key": "Thursday",
        "temp": 34
      },
      {
        "group": "Temperature",
        "key": "Friday",
        "temp": 23
      }
    ]

    const options = {
      "title": "Combo (Line + Stacked bar)",
      "axes": {
        "left": {
          "title": "Disney Park Attendance",
          "mapsTo": "value",
          "stacked": true
        },
        "bottom": {
          "title": "2018 Annual Sales Figures",
          "mapsTo": "key",
          "scaleType": "labels"
        },
        "right": {
          "title": "Temperature (°C)",
          "mapsTo": "temp",
          "correspondingDatasets": [
            "Temperature"
          ]
        }
      },
      "comboChartTypes": [
        {
          "type": "stacked-bar",
          "options": {},
          "correspondingDatasets": [
            "Florida",
            "California",
            "Tokyo"
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
