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
    const data = []

    const options = {
      "title": "Donut (skeleton)",
      "resizable": true,
      "donut": {
        "center": {
          "label": "Browsers"
        }
      },
      "data": {
        "loading": true
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
