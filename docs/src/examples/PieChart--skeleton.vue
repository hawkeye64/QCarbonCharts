<template>
  <q-page padding>
    <q-charts-pie
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsPie from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsPie'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsPie
  },
  setup() {
    const data = []

    const options = {
      "title": "Pie (skeleton)",
      "resizable": true,
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
