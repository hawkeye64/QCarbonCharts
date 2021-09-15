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
        "value": 67
      }
    ]

    const options = {
      "title": "Gauge circular without delta -- custom color",
      "resizable": true,
      "height": "250px",
      "gauge": {
        "type": "full"
      },
      "color": {
        "scale": {
          "value": "#FFE5B4"
        }
      }
    }

    return {
      data,
      options
    }
  }
}
</script>
