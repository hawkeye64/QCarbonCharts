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
    const data = [
      {
        "group": "2V2N 9KYPM version 1",
        "count": 28000
      },
      {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "count": 65000
      },
      {
        "group": "JQAI 2M4L1",
        "count": 75000
      },
      {
        "group": "J9DZ F37AP",
        "count": 3200
      },
      {
        "group": "YEL48 Q6XK YEL48",
        "count": 15000
      },
      {
        "group": "Misc",
        "count": 25000
      }
    ]

    const options = {
      "title": "Pie (value maps to count)",
      "resizable": true,
      "pie": {
        "valueMapsTo": "count"
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
