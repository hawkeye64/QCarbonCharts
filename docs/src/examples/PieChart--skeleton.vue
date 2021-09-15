<template>
  <q-page padding>
    <q-charts-pie
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsPie from 'quasar-ui-qcharts/src/components/QChartsPie'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsPie
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
