<template>
  <q-page padding>
    <q-charts-donut
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsDonut from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsDonut'

export default {
  components: {
    QCarbonChartsDonut
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
