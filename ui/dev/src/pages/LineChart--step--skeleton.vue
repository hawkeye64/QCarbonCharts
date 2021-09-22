<template>
  <q-page padding>
    <qcc-line
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccLine from 'quasar-ui-qcarboncharts/src/components/QccLine'

export default {
  components: {
    QccLine
  },
  setup() {
    const data = []

    const options = {
      "title": "Step (skeleton)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
      },
      "curve": "curveStepAfter",
      "data": {
        "loading": true
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
