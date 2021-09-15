<template>
  <q-page padding>
    <q-charts-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsBarSimple from 'quasar-ui-qcharts/src/components/QChartsBarSimple'

export default {
  components: {
    QChartsBarSimple
  },
  setup() {
		const data = []
    const options = {
      "title": "Vertical simple bar (skeleton)",
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
