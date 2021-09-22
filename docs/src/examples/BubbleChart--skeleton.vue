<template>
  <q-page padding>
    <qcc-bubble
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBubble from 'quasar-ui-qcarboncharts/src/components/QccBubble'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccBubble
  },
  setup() {
    const data = []
    const options = {
      "title": "Bubble (skeleton)",
      "axes": {
        "bottom": {
          "title": "No. of employees",
          "mapsTo": "sales",
          "includeZero": false
        },
        "left": {
          "title": "Annual sales",
          "mapsTo": "profit",
          "includeZero": false
        }
      },
      "bubble": {
        "radiusMapsTo": "surplus"
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
