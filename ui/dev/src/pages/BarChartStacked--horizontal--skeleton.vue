<template>
  <q-page padding>
    <qcc-bar-stacked
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBarStacked from 'quasar-ui-qcarboncharts/src/components/QccBarStacked'

export default {
  components: {
    QccBarStacked
  },
  setup() {
		const data = []
    const options = {
      "title": "Horizontal stacked bar (skeleton)",
      "axes": {
        "left": {
          "scaleType": "labels",
          "mapsTo": "key"
        },
        "bottom": {
          "mapsTo": "value"
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
