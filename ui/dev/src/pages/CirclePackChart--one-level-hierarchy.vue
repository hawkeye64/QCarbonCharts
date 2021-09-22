<template>
  <q-page padding>
    <qcc-circle-pack
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccCirclePack from 'quasar-ui-qcarboncharts/src/components/QccCirclePack'

export default {
  components: {
    QccCirclePack
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
