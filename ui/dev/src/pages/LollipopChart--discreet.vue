<template>
  <q-page padding>
    <q-charts-lollipop
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsLollipop from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsLollipop'

export default {
  components: {
    QCarbonChartsLollipop
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
      "title": "Lollipop (discrete)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "left": {
          "mapsTo": "value"
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
