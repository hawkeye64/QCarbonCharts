<template>
  <q-page padding>
    <qcc-donut
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccDonut from 'quasar-ui-qcarboncharts/src/components/QccDonut'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccDonut
  },
  setup() {
    const data = [
      {
        "group": "2V2N 9KYPM version 1",
        "value": 20000
      },
      {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "value": 65000
      },
      {
        "group": "JQAI 2M4L1",
        "value": 75000
      },
      {
        "group": "J9DZ F37AP",
        "value": 1200
      },
      {
        "group": "YEL48 Q6XK YEL48",
        "value": 10000
      },
      {
        "group": "Misc",
        "value": 25000
      }
    ]

    const options = {
      "title": "Donut",
      "resizable": true,
      "donut": {
        "center": {
          "label": "Browsers"
        }
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
