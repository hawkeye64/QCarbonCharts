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
      "title": "Gauge semicircular -- danger status",
      "resizable": true,
      "height": "250px",
      "width": "100%",
      "gauge": {
        "type": "semi",
        "status": "danger"
      }
    }

    return {
      data,
      options
    }
  }
}
</script>
