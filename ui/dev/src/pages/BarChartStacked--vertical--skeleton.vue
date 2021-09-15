<template>
  <q-page padding>
    <q-charts-bar-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarStacked from 'quasar-ui-qcharts/src/components/QChartsBarStacked'

export default {
  components: {
    QChartsBarStacked
  },
  setup() {
		const data = []
    const options = {
      "title": "Vertical stacked bar (skeleton)",
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
