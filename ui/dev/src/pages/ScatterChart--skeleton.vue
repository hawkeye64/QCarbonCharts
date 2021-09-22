<template>
  <q-page padding>
    <qcc-scatter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccScatter from 'quasar-ui-qcarboncharts/src/components/QccScatter'

export default {
  components: {
    QccScatter
  },
  setup() {
    const data = []

    const options = {
      "title": "Scatter (skeleton)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "scaleType": "time",
          "mapsTo": "date"
        },
        "left": {
          "mapsTo": "value"
        }
      },
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
