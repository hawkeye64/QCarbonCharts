<template>
  <q-page padding>
    <q-charts-meter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsMeter from 'quasar-ui-qcharts/src/components/QChartsMeter'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsMeter
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "value": 56
      }
    ]

    const options = {
      "title": "Meter Chart - no status",
      "meter": {
        "peak": 70
      },
      "height": "100px"
    }

    return {
      data,
      options
    }
  }
}
</script>
