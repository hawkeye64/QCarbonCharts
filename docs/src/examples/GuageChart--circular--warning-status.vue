<template>
  <q-page padding>
    <q-charts-guage
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsGuage from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsGuage'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsGuage
  },
  setup() {
    const data = [
      {
      "group": "value",
      "value": 42
      },
      {
        "group": "delta",
        "value": -13.37
      }
    ]

    const options = {
      "title": "Gauge circular -- warning status",
      "resizable": true,
      "height": "250px",
      "gauge": {
        "status": "warning",
        "type": "full"
      }
    }

    return {
      data,
      options
    }
  }
}
</script>
