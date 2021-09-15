<template>
  <q-page padding>
    <q-charts-bar-grouped
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsBarGrouped from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsBarGrouped'

export default {
  components: {
    QCarbonChartsBarGrouped
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal grouped bar (skeleton)",
      "axes": {
        "left": {
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "bottom": {
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
