<template>
  <q-page padding>
    <q-charts-area-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QChartsAreaSimple from 'quasar-ui-qcharts/src/components/QChartsAreaSimple'
import 'quasar-ui-qcharts/src/components/qcharts.sass'

export default {
  components: {
    QChartsAreaSimple
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "date": 1558453260000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558453320000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558453380000,
        "value": 5
      },
      {
        "group": "Dataset 1",
        "date": 1558453440000,
        "value": 1
      },
      {
        "group": "Dataset 1",
        "date": 1558453500000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558453560000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558453620000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558453680000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558453740000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558453800000,
        "value": 0
      },
      {
        "group": "Dataset 1",
        "date": 1558453860000,
        "value": 5
      },
      {
        "group": "Dataset 1",
        "date": 1558453920000,
        "value": 5
      },
      {
        "group": "Dataset 1",
        "date": 1558453980000,
        "value": 6
      },
      {
        "group": "Dataset 1",
        "date": 1558454040000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558454100000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558454160000,
        "value": 6
      },
      {
        "group": "Dataset 1",
        "date": 1558454280000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558454340000,
        "value": 6
      },
      {
        "group": "Dataset 1",
        "date": 1558454400000,
        "value": 0
      },
      {
        "group": "Dataset 1",
        "date": 1558454460000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558454520000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558454580000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558454640000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558454700000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558454760000,
        "value": 2
      },
      {
        "group": "Dataset 1",
        "date": 1558454820000,
        "value": 4
      },
      {
        "group": "Dataset 1",
        "date": 1558454880000,
        "value": 1
      },
      {
        "group": "Dataset 1",
        "date": 1558454940000,
        "value": 1
      },
      {
        "group": "Dataset 1",
        "date": 1558455000000,
        "value": 3
      },
      {
        "group": "Dataset 1",
        "date": 1558455060000,
        "value": 2
      }
    ]

    const options = {
      "title": "Sparkline (modified area chart)",
      "height": "150px",
      "grid": {
        "x": {
          "enabled": false
        },
        "y": {
          "enabled": false
        }
      },
      "axes": {
        "bottom": {
          "visible": false,
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "visible": false,
          "mapsTo": "value",
          "scaleType": "linear"
        }
      },
      "color": {
        "gradient": {
          "enabled": true
        }
      },
      "points": {
        "enabled": false
      },
      "legend": {
        "enabled": false
      }
    }

    return {
      data,
      options
    }
  }
}
</script>
