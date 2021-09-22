<template>
  <q-page padding>
    <qcc-scatter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccScatter from 'quasar-ui-qcarboncharts/src/components/QccScatter'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccScatter
  },
  setup() {
    const data = [
      {
        "group": "Orders",
        "date": "January",
        "orderCount": 121
      },
      {
        "group": "Orders",
        "date": "February",
        "orderCount": 321
      },
      {
        "group": "Orders",
        "date": "March",
        "orderCount": 370
      },
      {
        "group": "Orders",
        "date": "April",
        "orderCount": 329
      },
      {
        "group": "Orders",
        "date": "May",
        "orderCount": 121
      },
      {
        "group": "Products",
        "date": "January",
        "productCount": 26100
      },
      {
        "group": "Products",
        "date": "February",
        "productCount": 25100
      },
      {
        "group": "Products",
        "date": "March",
        "productCount": 28100
      },
      {
        "group": "Products",
        "date": "April",
        "productCount": 15900
      },
      {
        "group": "Products",
        "date": "May",
        "productCount": 34100
      }
    ]

    const options = {
      "title": "Scatter (dual axes)",
      "axes": {
        "bottom": {
          "mapsTo": "date",
          "scaleType": "labels"
        },
        "left": {
          "title": "order count",
          "mapsTo": "orderCount",
          "scaleType": "linear"
        },
        "right": {
          "title": "product count",
          "mapsTo": "productCount",
          "scaleType": "linear",
          "correspondingDatasets": [
            "Products"
          ]
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
