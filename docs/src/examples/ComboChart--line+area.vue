<template>
  <q-page padding>
    <q-charts-combo
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsCombo from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsCombo'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsCombo
  },
  setup() {
    const data = [
      {
        "group": "Health",
        "key": "January",
        "value": 312
      },
      {
        "group": "Health",
        "key": "February",
        "value": 232
      },
      {
        "group": "Health",
        "key": "March",
        "value": 432
      },
      {
        "group": "Health",
        "key": "April",
        "value": 712
      },
      {
        "group": "Health",
        "key": "May",
        "value": 834
      },
      {
        "group": "Health",
        "key": "June",
        "value": 800
      },
      {
        "group": "Health",
        "key": "July",
        "value": 612
      },
      {
        "group": "Health",
        "key": "August",
        "value": 442
      },
      {
        "group": "Temperature",
        "key": "January",
        "temp": -20
      },
      {
        "group": "Temperature",
        "key": "February",
        "temp": -12
      },
      {
        "group": "Temperature",
        "key": "March",
        "temp": 3
      },
      {
        "group": "Temperature",
        "key": "April",
        "temp": 18
      },
      {
        "group": "Temperature",
        "key": "May",
        "temp": 24
      },
      {
        "group": "Temperature",
        "key": "June",
        "temp": 34
      },
      {
        "group": "Temperature",
        "key": "July",
        "temp": 37
      },
      {
        "group": "Temperature",
        "key": "August",
        "temp": 30
      }
    ]

    const options = {
      "title": "Combo (Line + Area)",
      "points": {
        "enabled": false
      },
      "axes": {
        "left": {
          "title": "Score",
          "mapsTo": "value"
        },
        "bottom": {
          "scaleType": "labels",
          "mapsTo": "key"
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
          "type": "area",
          "options": {},
          "correspondingDatasets": [
            "Health"
          ]
        },
        {
          "type": "line",
          "options": {
            "points": {
              "enabled": true
            }
          },
          "correspondingDatasets": [
            "Temperature"
          ]
        }
      ],
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
