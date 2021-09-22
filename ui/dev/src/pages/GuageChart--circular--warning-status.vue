<template>
  <q-page padding>
    <qcc-guage
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccGuage from 'quasar-ui-qcarboncharts/src/components/QccGuage'

export default {
  components: {
    QccGuage
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
