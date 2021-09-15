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
      "title": "Meter Chart - with statuses",
      "meter": {
        "peak": 80,
        "status": {
          "ranges": [
            {
              "range": [
                0,
                50
              ],
              "status": "success"
            },
            {
              "range": [
                50,
                60
              ],
              "status": "warning"
            },
            {
              "range": [
                60,
                100
              ],
              "status": "danger"
            }
          ]
        }
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
