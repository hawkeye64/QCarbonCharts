<template>
  <q-page padding>
    <q-charts-donut
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsDonut from 'quasar-ui-qcharts/src/components/QChartsDonut'

export default {
  components: {
    QChartsDonut
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
