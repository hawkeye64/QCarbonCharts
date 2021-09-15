<template>
  <q-page padding>
    <q-charts-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsAreaSimple from 'quasar-ui-qcharts/src/components/QChartsAreaSimple'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsAreaSimple
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "value": 10000,
        "key": "a"
      },
      {
        "group": "Dataset 1",
        "value": 65000,
        "key": "b"
      },
      {
        "group": "Dataset 1",
        "value": 10000,
        "key": "c"
      },
      {
        "group": "Dataset 1",
        "value": 49213,
        "key": "d"
      },
      {
        "group": "Dataset 1",
        "value": 51213,
        "key": "e"
      },
      {
        "group": "Dataset 2",
        "value": 20000,
        "key": "a"
      },
      {
        "group": "Dataset 2",
        "value": 25000,
        "key": "b"
      },
      {
        "group": "Dataset 2",
        "value": 60000,
        "key": "c"
      },
      {
        "group": "Dataset 2",
        "value": 30213,
        "key": "d"
      },
      {
        "group": "Dataset 2",
        "value": 55213,
        "key": "e"
      },
      {
        "group": "Dataset 3",
        "value": 30000,
        "key": "a"
      },
      {
        "group": "Dataset 3",
        "value": 20000,
        "key": "b"
      },
      {
        "group": "Dataset 3",
        "value": 40000,
        "key": "c"
      },
      {
        "group": "Dataset 3",
        "value": 60213,
        "key": "d"
      },
      {
        "group": "Dataset 3",
        "value": 25213,
        "key": "e"
      }
    ]
    const options = {
      "title": "Area (discrete domain)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "key",
          "scaleType": "labels"
        },
        "left": {
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
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
