<template>
  <q-page padding>
    <qcc-meter
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccMeter from 'quasar-ui-qcarboncharts/src/components/QccMeter'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccMeter
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
