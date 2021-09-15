<template>
  <q-page padding>
    <q-charts-circle-pack
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsCirclePack from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsCirclePack'

export default {
  components: {
    QCarbonChartsCirclePack
  },
  setup() {
    const data = [
      {
        "name": "North America",
        "children": [
          {
            "name": "Canada",
            "value": 800
          },
          {
            "name": "United States",
            "value": 200
          },
          {
            "name": "Mexico",
            "value": 100
          }
        ]
      },
      {
        "name": "South America",
        "children": [
          {
            "name": "Brazil",
            "value": 2800
          },
          {
            "name": "Argentina",
            "value": 10000
          },
          {
            "name": "G",
            "value": 500
          },
          {
            "name": "DE",
            "value": 500
          },
          {
            "name": "EF",
            "value": 200
          }
        ]
      },
      {
        "name": "Asia",
        "children": [
          {
            "name": "China",
            "value": 500
          },
          {
            "name": "Thailand",
            "value": 100
          },
          {
            "name": "Cambodia",
            "value": 500
          },
          {
            "name": "India",
            "value": 500
          },
          {
            "name": "Vietnam",
            "value": 400
          },
          {
            "name": "North Korea",
            "value": 600
          },
          {
            "name": "Japan",
            "value": 200
          },
          {
            "name": "Indonesia",
            "value": 800
          }
        ]
      },
      {
        "name": "Europe",
        "children": [
          {
            "name": "France",
            "value": 2000
          },
          {
            "name": "Italy",
            "value": 400
          },
          {
            "name": "Greece",
            "value": 500
          },
          {
            "name": "Portugal",
            "value": 100
          },
          {
            "name": "Austria",
            "value": 1000
          },
          {
            "name": "Ireland",
            "value": 800
          },
          {
            "name": "Germany",
            "value": 700
          },
          {
            "name": "Poland",
            "value": 200
          },
          {
            "name": "Ukraine",
            "value": 300
          }
        ]
      }
    ]

    const options = {
      "experimental": "true",
      "title": "Two Levels Hierarchy",
      "canvasZoom": {
        "enabled": true
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
