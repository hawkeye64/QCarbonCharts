<template>
  <q-page padding>
    <q-charts-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarSimple from 'quasar-ui-qcharts/src/components/QChartsBarSimple'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsBarSimple
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal simple bar (skeleton)",
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
