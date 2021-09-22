<template>
  <q-page padding>
    <qcc-radar
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QccRadar from 'quasar-ui-qcarboncharts/src/components/QccRadar'

export default {
  components: {
    QccRadar
  },
  setup() {
    const data = [
      {
        "month": "January",
        "activity": "Eating",
        "hoursAvg": 2
      },
      {
        "month": "January",
        "activity": "Drinking",
        "hoursAvg": 6
      },
      {
        "month": "January",
        "activity": "Sleeping",
        "hoursAvg": 6
      },
      {
        "month": "January",
        "activity": "Working",
        "hoursAvg": 8
      },
      {
        "month": "January",
        "activity": "Walking",
        "hoursAvg": 1
      },
      {
        "month": "January",
        "activity": "Running",
        "hoursAvg": 0.5
      },
      {
        "month": "January",
        "activity": "Cycling",
        "hoursAvg": 1
      },
      {
        "month": "January",
        "activity": "Swimming",
        "hoursAvg": 0
      },
      {
        "month": "February",
        "activity": "Eating",
        "hoursAvg": 1.5
      },
      {
        "month": "February",
        "activity": "Drinking",
        "hoursAvg": 9
      },
      {
        "month": "February",
        "activity": "Sleeping",
        "hoursAvg": 7
      },
      {
        "month": "February",
        "activity": "Working",
        "hoursAvg": 9
      },
      {
        "month": "February",
        "activity": "Walking",
        "hoursAvg": 2
      },
      {
        "month": "February",
        "activity": "Running",
        "hoursAvg": 2
      },
      {
        "month": "February",
        "activity": "Cycling",
        "hoursAvg": 0
      },
      {
        "month": "February",
        "activity": "Swimming",
        "hoursAvg": 1.5
      },
      {
        "month": "March",
        "activity": "Eating",
        "hoursAvg": 3
      },
      {
        "month": "March",
        "activity": "Drinking",
        "hoursAvg": 5
      },
      {
        "month": "March",
        "activity": "Sleeping",
        "hoursAvg": 5
      },
      {
        "month": "March",
        "activity": "Working",
        "hoursAvg": 6
      },
      {
        "month": "March",
        "activity": "Walking",
        "hoursAvg": 3
      },
      {
        "month": "March",
        "activity": "Running",
        "hoursAvg": 9
      },
      {
        "month": "March",
        "activity": "Cycling",
        "hoursAvg": 1
      },
      {
        "month": "March",
        "activity": "Swimming",
        "hoursAvg": 7
      },
      {
        "month": "April",
        "activity": "Eating",
        "hoursAvg": 5
      },
      {
        "month": "April",
        "activity": "Drinking",
        "hoursAvg": 1
      },
      {
        "month": "April",
        "activity": "Sleeping",
        "hoursAvg": 4
      },
      {
        "month": "April",
        "activity": "Working",
        "hoursAvg": 2
      },
      {
        "month": "April",
        "activity": "Walking",
        "hoursAvg": 5
      },
      {
        "month": "April",
        "activity": "Running",
        "hoursAvg": 4
      },
      {
        "month": "April",
        "activity": "Cycling",
        "hoursAvg": 6
      },
      {
        "month": "April",
        "activity": "Swimming",
        "hoursAvg": 3
      },
      {
        "month": "May",
        "activity": "Eating",
        "hoursAvg": 7
      },
      {
        "month": "May",
        "activity": "Drinking",
        "hoursAvg": 0
      },
      {
        "month": "May",
        "activity": "Sleeping",
        "hoursAvg": 5
      },
      {
        "month": "May",
        "activity": "Working",
        "hoursAvg": 4
      },
      {
        "month": "May",
        "activity": "Walking",
        "hoursAvg": 8
      },
      {
        "month": "May",
        "activity": "Running",
        "hoursAvg": 2
      },
      {
        "month": "May",
        "activity": "Cycling",
        "hoursAvg": 3
      },
      {
        "month": "May",
        "activity": "Swimming",
        "hoursAvg": 1
      }
    ]

    const options = {
      "title": "Radar - Dense",
      "radar": {
        "axes": {
          "angle": "activity",
          "value": "hoursAvg"
        }
      },
      "data": {
        "groupMapsTo": "month"
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
