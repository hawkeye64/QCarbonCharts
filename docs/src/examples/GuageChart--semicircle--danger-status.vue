<template>
  <q-page padding>
    <q-charts-guage
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsGuage from 'quasar-ui-qcharts/src/components/QChartsGuage'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsGuage
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
