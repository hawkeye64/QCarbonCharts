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
      "title": "Vertical grouped bar (skeleton)",
      "axes": {
        "left": {
          "mapsTo": "value"
        },
        "bottom": {
          "scaleType": "labels",
          "mapsTo": "key"
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
