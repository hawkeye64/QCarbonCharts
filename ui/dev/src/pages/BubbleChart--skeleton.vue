<template>
  <q-page padding>
    <q-charts-bubble
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBubble from 'quasar-ui-qcharts/src/components/QChartsBubble'

export default {
  components: {
    QChartsBubble
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
