<template>
  <q-page padding>
    <q-charts-circle-pack
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsCirclePack from 'quasar-ui-qcharts/src/components/QChartsCirclePack'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsCirclePack
  },
  setup() {
    const data = [
      {
        "name": "Transportation",
        "value": 300
      },
      {
        "name": "Healthcare",
        "value": 600
      },
      {
        "name": "Hospitality",
        "value": 50
      },
      {
        "name": "Tourism",
        "value": 90
      },
      {
        "name": "Food",
        "value": 280
      }
    ]

    const options = {
      "experimental": "true",
      "title": "One Level Hierachy",
      "canvasZoom": {
        "enabled": true
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
