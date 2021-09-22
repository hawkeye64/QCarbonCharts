<template>
  <q-page padding>
    <qcc-radar
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccRadar from 'quasar-ui-qcarboncharts/src/components/QccRadar'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccRadar
  },
  setup() {
    const data = [
      {
        "product": "Product 1",
        "feature": "Price",
        "score": 60
      },
      {
        "product": "Product 1",
        "feature": "Usability",
        "score": 92
      },
      {
        "product": "Product 1",
        "feature": "Availability",
        "score": 5
      },
      {
        "product": "Product 1",
        "feature": "Performance",
        "score": 85
      },
      {
        "product": "Product 1",
        "feature": "Quality",
        "score": 60
      },
      {
        "product": "Product 2",
        "feature": "Price",
        "score": 70
      },
      {
        "product": "Product 2",
        "feature": "Usability",
        "score": 63
      },
      {
        "product": "Product 2",
        "feature": "Availability",
        "score": 78
      },
      {
        "product": "Product 2",
        "feature": "Performance",
        "score": 50
      },
      {
        "product": "Product 2",
        "feature": "Quality",
        "score": 30
      }
    ]

    const options = {
      "title": "Radar (centered)",
      "radar": {
        "axes": {
          "angle": "feature",
          "value": "score"
        },
        "alignment": "center"
      },
      "data": {
        "groupMapsTo": "product"
      },
      "legend": {
        "alignment": "center"
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
