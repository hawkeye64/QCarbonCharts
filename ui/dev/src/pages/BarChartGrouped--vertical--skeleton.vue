<template>
  <q-page padding>
    <qcc-bar-grouped
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBarGrouped from 'quasar-ui-qcarboncharts/src/components/QccBarGrouped'

export default {
  components: {
    QccBarGrouped
  },
  setup() {
		const data = []
    const options = {
      "title": "Vertical grouped bar (skeleton)",
      "axes": {
        "left": {
          "mapsTo": "value"
        },
        "bottom": {
          "scaleType": "labels",
          "mapsTo": "key"
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
