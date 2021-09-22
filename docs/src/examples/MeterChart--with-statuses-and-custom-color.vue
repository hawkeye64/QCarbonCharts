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
      "title": "Meter Chart - statuses and custom color",
      "meter": {
        "peak": 70,
        "status": {
          "ranges": [
            {
              "range": [
                0,
                40
              ],
              "status": "success"
            },
            {
              "range": [
                40,
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
      "color": {
        "scale": {
          "Dataset 1": "#925699"
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
