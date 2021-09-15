<template>
  <q-page padding>
    <q-charts-lollipop
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsLollipop from 'quasar-ui-qcharts/src/components/QChartsLollipop'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsLollipop
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "key": "Qty",
        "value": 34200
      },
      {
        "group": "Dataset 2",
        "key": "More",
        "value": 34200
      },
      {
        "group": "Dataset 3",
        "key": "Sold",
        "value": 41200
      },
      {
        "group": "Dataset 4",
        "key": "Restocking",
        "value": 22000
      }
    ]

    const options = {
      "title": "Lollipop (horizontal) - presentation",
      "axes": {
        "left": {
          "title": "2019 Annual Sales Figures",
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "bottom": {
          "mapsTo": "value"
        }
      },
      "points": {
        "radius": 7
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
