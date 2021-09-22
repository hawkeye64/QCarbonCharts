<template>
  <q-page padding>
    <qcc-bar-simple
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccBarSimple from 'quasar-ui-qcarboncharts/src/components/QccBarSimple'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QccBarSimple
  },
  setup() {
		const data = [
      {
        "group": "data",
        "date": "2019-02-01T17:10:00.000Z",
        "value": 10000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:12:04.000Z",
        "value": 20001
      },
      {
        "group": "data",
        "date": "2019-02-01T17:14:08.000Z",
        "value": 10002
      },
      {
        "group": "data",
        "date": "2019-02-01T17:15:08.000Z",
        "value": 10062
      },
      {
        "group": "data",
        "date": "2019-02-01T17:17:12.000Z",
        "value": 30003
      },
      {
        "group": "data",
        "date": "2019-02-01T17:18:16.000Z",
        "value": 20004
      },
      {
        "group": "data",
        "date": "2019-02-01T17:19:20.000Z",
        "value": 10005
      },
      {
        "group": "data",
        "date": "2019-02-01T17:22:24.000Z",
        "value": 50006
      },
      {
        "group": "data",
        "date": "2019-02-01T17:24:24.000Z",
        "value": 20006
      },
      {
        "group": "data",
        "date": "2019-02-01T17:26:28.000Z",
        "value": 40007
      },
      {
        "group": "data",
        "date": "2019-02-01T17:27:32.000Z",
        "value": 30008
      },
      {
        "group": "data",
        "date": "2019-02-01T17:30:36.000Z",
        "value": 10000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:32:36.000Z",
        "value": 10000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:35:40.000Z",
        "value": 20000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:36:44.000Z",
        "value": 10000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:37:48.000Z",
        "value": 30000
      },
      {
        "group": "data",
        "date": "2019-02-01T17:40:52.000Z",
        "value": 10000
      }
    ]
    const options = {
      "title": "Vertical simple bar (time series - dense data)",
      "axes": {
        "left": {
          "mapsTo": "value"
        },
        "bottom": {
          "mapsTo": "date",
          "scaleType": "time"
        }
      },
      "timeScale": {
        "localeObject": {
          "code": "tr",
          "formatLong": {},
          "localize": {},
          "match": {},
          "options": {
            "weekStartsOn": 1,
            "firstWeekContainsDate": 1
          }
        }
      },
      "bars": {
        "maxWidth": 200
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
