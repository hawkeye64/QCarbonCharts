<template>
  <q-page padding>
    <q-charts-bubble
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsBubble from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsBubble'

export default {
  components: {
    QCarbonChartsBubble
  },
  setup() {
    const data = [
      {
        "group": "2014",
        "product": "Cloud",
        "value": 162,
        "problem": "Skills"
      },
      {
        "group": "2014",
        "product": "Mainframe",
        "value": 340,
        "problem": "Skills"
      },
      {
        "group": "2014",
        "product": "Cloud",
        "value": 202,
        "problem": "Software"
      },
      {
        "group": "2014",
        "product": "Mainframe",
        "value": 64,
        "problem": "Software"
      },
      {
        "group": "2014",
        "product": "Cloud",
        "value": 102,
        "problem": "Staffing"
      },
      {
        "group": "2014",
        "product": "Mainframe",
        "value": 88,
        "problem": "Staffing"
      },
      {
        "group": "2016",
        "product": "Cloud",
        "value": 136,
        "problem": "Skills"
      },
      {
        "group": "2016",
        "product": "Mainframe",
        "value": 74,
        "problem": "Skills"
      },
      {
        "group": "2016",
        "product": "Cloud",
        "value": 45,
        "problem": "Software"
      },
      {
        "group": "2016",
        "product": "Mainframe",
        "value": 24,
        "problem": "Software"
      },
      {
        "group": "2016",
        "product": "Cloud",
        "value": 36,
        "problem": "Staffing"
      },
      {
        "group": "2016",
        "product": "Mainframe",
        "value": 44,
        "problem": "Staffing"
      },
      {
        "group": "2018",
        "product": "Cloud",
        "value": 78,
        "problem": "Skills"
      },
      {
        "group": "2018",
        "product": "Mainframe",
        "value": 94,
        "problem": "Skills"
      },
      {
        "group": "2018",
        "product": "Cloud",
        "value": 56,
        "problem": "Software"
      },
      {
        "group": "2018",
        "product": "Mainframe",
        "value": 104,
        "problem": "Software"
      },
      {
        "group": "2018",
        "product": "Cloud",
        "value": 146,
        "problem": "Staffing"
      },
      {
        "group": "2018",
        "product": "Mainframe",
        "value": 274,
        "problem": "Staffing"
      }
    ]
    const options = {
      "title": "Bubble (dual discrete axes)",
      "axes": {
        "bottom": {
          "title": "Problems",
          "scaleType": "labels",
          "mapsTo": "problem"
        },
        "left": {
          "scaleType": "labels",
          "mapsTo": "product",
          "title": "Products"
        }
      },
      "bubble": {
        "radiusMapsTo": "value"
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
