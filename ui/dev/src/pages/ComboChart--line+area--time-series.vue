<template>
  <q-page padding>
    <qcc-combo
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccCombo from 'quasar-ui-qcarboncharts/src/components/QccCombo'

export default {
  components: {
    QccCombo
  },
  setup() {
    const data = [
      {
        "group": "Health",
        "key": "2018-12-30T07:00:00.000Z",
        "value": 312
      },
      {
        "group": "Health",
        "key": "2019-01-06T07:00:00.000Z",
        "value": 232
      },
      {
        "group": "Health",
        "key": "2019-01-08T07:00:00.000Z",
        "value": 432
      },
      {
        "group": "Health",
        "key": "2019-01-15T07:00:00.000Z",
        "value": 712
      },
      {
        "group": "Health",
        "key": "2019-01-19T07:00:00.000Z",
        "value": 834
      },
      {
        "group": "Health",
        "key": "2019-02-01T07:00:00.000Z",
        "value": 800
      },
      {
        "group": "Health",
        "key": "2019-02-05T07:00:00.000Z",
        "value": 612
      },
      {
        "group": "Health",
        "key": "2019-02-13T07:00:00.000Z",
        "value": 442
      },
      {
        "group": "Temperature",
        "key": "2019-01-01T07:00:00.000Z",
        "temp": -20
      },
      {
        "group": "Temperature",
        "key": "2019-01-05T07:00:00.000Z",
        "temp": -12
      },
      {
        "group": "Temperature",
        "key": "2019-01-08T07:00:00.000Z",
        "temp": 3
      },
      {
        "group": "Temperature",
        "key": "2019-01-13T07:00:00.000Z",
        "temp": 18
      },
      {
        "group": "Temperature",
        "key": "2019-01-19T07:00:00.000Z",
        "temp": 24
      },
      {
        "group": "Temperature",
        "key": "2019-02-02T07:00:00.000Z",
        "temp": 34
      },
      {
        "group": "Temperature",
        "key": "2019-02-07T07:00:00.000Z",
        "temp": 37
      },
      {
        "group": "Temperature",
        "key": "2019-02-09T07:00:00.000Z",
        "temp": 30
      }
    ]

    const options = {
      "title": "Combo (Line + Area) Time series",
      "points": {
        "enabled": false
      },
      "axes": {
        "left": {
          "title": "Score",
          "mapsTo": "value"
        },
        "bottom": {
          "scaleType": "time",
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
      "timeScale": {
        "addSpaceOnEdges": 0
      },
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
