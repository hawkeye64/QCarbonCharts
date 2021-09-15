<template>
  <q-page padding>
    <q-charts-histogram
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsHistogram from 'quasar-ui-qcharts/src/components/QChartsHistogram'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsHistogram
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "age": 20
      },
      {
        "group": "Dataset 2",
        "age": 21
      },
      {
        "group": "Dataset 2",
        "age": 23
      },
      {
        "group": "Dataset 3",
        "age": 21
      },
      {
        "group": "Dataset 3",
        "age": 23
      },
      {
        "group": "Dataset 3",
        "age": 24
      },
      {
        "group": "Dataset 1",
        "age": 30
      },
      {
        "group": "Dataset 2",
        "age": 34
      },
      {
        "group": "Dataset 1",
        "age": 35
      },
      {
        "group": "Dataset 3",
        "age": 30
      },
      {
        "group": "Dataset 1",
        "age": 40
      },
      {
        "group": "Dataset 2",
        "age": 43
      },
      {
        "group": "Dataset 1",
        "age": 45
      },
      {
        "group": "Dataset 1",
        "age": 46
      },
      {
        "group": "Dataset 3",
        "age": 40
      },
      {
        "group": "Dataset 3",
        "age": 43
      },
      {
        "group": "Dataset 3",
        "age": 45
      },
      {
        "group": "Dataset 1",
        "age": 48
      },
      {
        "group": "Dataset 1",
        "age": 50
      },
      {
        "group": "Dataset 2",
        "age": 55
      },
      {
        "group": "Dataset 2",
        "age": 66
      },
      {
        "group": "Dataset 2",
        "age": 58
      },
      {
        "group": "Dataset 1",
        "age": 70
      },
      {
        "group": "Dataset 1",
        "age": 78
      },
      {
        "group": "Dataset 3",
        "age": 71
      },
      {
        "group": "Dataset 3",
        "age": 75
      },
      {
        "group": "Dataset 2",
        "age": 83
      },
      {
        "group": "Dataset 2",
        "age": 86
      },
      {
        "group": "Dataset 1",
        "age": 87
      }
    ]

    const options = {
      "title": "Histogram (defined bins) (linear)",
      "axes": {
        "bottom": {
          "title": "Age",
          "mapsTo": "age",
          "bins": [
            20,
            40,
            50,
            60,
            90
          ],
          "limitDomainToBins": true
        },
        "left": {
          "title": "No. of participants",
          "scaleType": "linear",
          "stacked": true,
          "binned": true
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
