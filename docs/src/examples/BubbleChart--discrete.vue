<template>
  <q-page padding>
    <q-charts-bubble
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsBubble from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsBubble'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsBubble
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "key": "Qty",
        "value": 8000,
        "surplus": 50000
      },
      {
        "group": "Dataset 1",
        "key": "More",
        "value": 23500,
        "surplus": 15000
      },
      {
        "group": "Dataset 1",
        "key": "Sold",
        "value": 53100,
        "surplus": 32000
      },
      {
        "group": "Dataset 1",
        "key": "Restocking",
        "value": 42300,
        "surplus": 53000
      },
      {
        "group": "Dataset 1",
        "key": "Misc",
        "value": 12300,
        "surplus": 34000
      },
      {
        "group": "Dataset 2",
        "key": "Qty",
        "value": 34200,
        "surplus": 23000
      },
      {
        "group": "Dataset 2",
        "key": "More",
        "value": 53200,
        "surplus": 31000
      },
      {
        "group": "Dataset 2",
        "key": "Sold",
        "value": 42300,
        "surplus": 13000
      },
      {
        "group": "Dataset 2",
        "key": "Restocking",
        "value": 13400,
        "surplus": 55000
      },
      {
        "group": "Dataset 2",
        "key": "Misc",
        "value": 0,
        "surplus": 12000
      },
      {
        "group": "Dataset 3",
        "key": "Qty",
        "value": 41200,
        "surplus": 32000
      },
      {
        "group": "Dataset 3",
        "key": "More",
        "value": 18400,
        "surplus": 12000
      },
      {
        "group": "Dataset 3",
        "key": "Sold",
        "value": 34210,
        "surplus": 18000
      },
      {
        "group": "Dataset 3",
        "key": "Restocking",
        "value": 1400,
        "surplus": 21000
      },
      {
        "group": "Dataset 3",
        "key": "Misc",
        "value": 42100,
        "surplus": 22000
      },
      {
        "group": "Dataset 4",
        "key": "Qty",
        "value": 22000,
        "surplus": 32000
      },
      {
        "group": "Dataset 4",
        "key": "More",
        "value": 4000,
        "surplus": 32000
      },
      {
        "group": "Dataset 4",
        "key": "Sold",
        "value": 9000,
        "surplus": 43000
      },
      {
        "group": "Dataset 4",
        "key": "Restocking",
        "value": 24000,
        "surplus": 43000
      },
      {
        "group": "Dataset 4",
        "key": "Misc",
        "value": 7000,
        "surplus": 21000
      }
    ]
    const options = {
      "title": "Bubble (discrete)",
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
      "bubble": {
        "radiusMapsTo": "surplus"
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
