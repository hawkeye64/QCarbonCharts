<template>
  <q-page padding>
    <qcc-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccAreaSimple from 'quasar-ui-qcarboncharts/src/components/QccAreaSimple'

export default {
  components: {
    QccAreaSimple
  },
  setup() {
    const data = []

    const options = {
      "title": "Sparkline (loading)",
      "axes": {
        "bottom": {
          "visible": false,
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "visible": false,
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
      },
      "grid": {
        "x": {
          "enabled": false
        },
        "y": {
          "enabled": false
        }
      },
      "legend": {
        "enabled": false
      },
      "tooltip": {
        "enabled": false
      },
      "points": {
        "enabled": false
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
