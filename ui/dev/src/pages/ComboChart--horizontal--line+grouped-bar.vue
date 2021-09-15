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
        "group": "Location 1",
        "key": "Monday",
        "value": 65000
      },
      {
        "group": "Location 1",
        "key": "Tuesday",
        "value": -39123
      },
      {
        "group": "Location 1",
        "key": "Wednesday",
        "value": -35213
      },
      {
        "group": "Location 2",
        "key": "Monday",
        "value": 32432
      },
      {
        "group": "Location 2",
        "key": "Tuesday",
        "value": -21312
      },
      {
        "group": "Location 2",
        "key": "Wednesday",
        "value": -56456
      },
      {
        "group": "Location 3",
        "key": "Monday",
        "value": -12312
      },
      {
        "group": "Location 3",
        "key": "Tuesday",
        "value": 23232
      },
      {
        "group": "Location 3",
        "key": "Wednesday",
        "value": 34232
      },
      {
        "group": "Temperature",
        "key": "Monday",
        "temp": 20
      },
      {
        "group": "Temperature",
        "key": "Tuesday",
        "temp": 23
      },
      {
        "group": "Temperature",
        "key": "Wednesday",
        "temp": 33
      }
    ]

    const options = {
      "title": "Combo Horizontal (Line + Grouped bar)",
      "axes": {
        "top": {
          "title": "Sales",
          "mapsTo": "value",
          "main": true
        },
        "left": {
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "bottom": {
          "title": "Temperature (°C)",
          "mapsTo": "temp",
          "correspondingDatasets": [
            "Temperature"
          ]
        }
      },
      "comboChartTypes": [
        {
          "type": "grouped-bar",
          "correspondingDatasets": [
            "Location 1",
            "Location 2",
            "Location 3"
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
