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
		const data = [
      {
        "group": "Qty",
        "value": 65000
      },
      {
        "group": "More",
        "value": 29123
      },
      {
        "group": "Sold",
        "value": 35213
      },
      {
        "group": "Restocking",
        "value": 51213
      },
      {
        "group": "Misc",
        "value": 16932
      }
    ]
    const options = {
      "title": "Vertical simple bar (discrete)",
      "axes": {
        "left": {
          "mapsTo": "value"
        },
        "bottom": {
          "mapsTo": "group",
          "scaleType": "labels"
        }
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
