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
        "name": "Revenue",
        "children": [
          {
            "name": "North America",
            "children": [
              {
                "name": "Canada",
                "children": [
                  {
                    "name": "Toronto",
                    "value": 5000
                  },
                  {
                    "name": "Montreal",
                    "value": 1000
                  }
                ]
              },
              {
                "name": "United States",
                "children": [
                  {
                    "name": "Texas",
                    "value": 500
                  },
                  {
                    "name": "New York",
                    "value": 400
                  }
                ]
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
                "value": 280
              },
              {
                "name": "Argentina",
                "value": 700
              },
              {
                "name": "Peru",
                "value": 500
              }
            ]
          },
          {
            "name": "Africa",
            "children": [
              {
                "name": "Egypt",
                "value": 50
              },
              {
                "name": "Morocco",
                "value": 10
              },
              {
                "name": "Chad",
                "value": 200
              },
              {
                "name": "Nigeria",
                "value": 80
              },
              {
                "name": "Libya",
                "value": 90
              }
            ]
          },
          {
            "name": "Europe",
            "children": [
              {
                "name": "Portugal",
                "value": 2000
              },
              {
                "name": "Spain",
                "value": 400
              },
              {
                "name": "France",
                "value": 500
              },
              {
                "name": "Italy",
                "value": 300
              },
              {
                "name": "Poland",
                "value": 100
              },
              {
                "name": "Ukraine",
                "value": 900
              }
            ]
          }
        ]
      }
    ]

    const options = {
      "experimental": "true",
      "title": "Three Levels Hierarchy (monchromatic)",
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
