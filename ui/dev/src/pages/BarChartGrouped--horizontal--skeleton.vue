<template>
  <q-page padding>
    <q-charts-bar-grouped
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarGrouped from 'quasar-ui-qcharts/src/components/QChartsBarGrouped'

export default {
  components: {
    QChartsBarGrouped
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
