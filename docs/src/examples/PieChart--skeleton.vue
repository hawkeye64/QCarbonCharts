<template>
  <q-page padding>
    <qcc-pie
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccPie from 'quasar-ui-qcarboncharts/src/components/QccPie'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccPie
  },
  setup() {
    const data = []

    const options = {
      "title": "Pie (skeleton)",
      "resizable": true,
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
