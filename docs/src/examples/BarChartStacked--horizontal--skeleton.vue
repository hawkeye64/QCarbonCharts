<template>
  <q-page padding>
    <q-charts-bar-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarStacked from 'quasar-ui-qcharts/src/components/QChartsBarStacked'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsBarStacked
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal stacked bar (skeleton)",
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
