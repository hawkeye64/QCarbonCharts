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
