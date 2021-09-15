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
