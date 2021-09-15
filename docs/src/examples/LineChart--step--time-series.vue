<template>
  <q-page padding>
    <q-charts-line
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsLine from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsLine'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsLine
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 50000,
        "surplus": 606597728.6145377
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-05T07:00:00.000Z",
        "value": 65000,
        "surplus": 920112265.5244873
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T07:00:00.000Z",
        "value": null,
        "surplus": 5947.523752532191
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 49213,
        "surplus": 350389715.98227906
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 51213,
        "surplus": 1155731540.483379
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 0,
        "surplus": 7448.11561574908
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 57312,
        "surplus": 209244274.6890149
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 27432,
        "surplus": 359300447.06528914
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-15T07:00:00.000Z",
        "value": 70323,
        "surplus": 1242501354.2173734
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-19T07:00:00.000Z",
        "value": 21300,
        "surplus": 476821336.3108465
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-01T07:00:00.000Z",
        "value": 40000,
        "surplus": 478793402.7945582
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-05T07:00:00.000Z",
        "value": null,
        "surplus": 15976.697907214593
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 18000,
        "surplus": 6617699.215321227
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T07:00:00.000Z",
        "value": 39213,
        "surplus": 688187362.5509695
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-17T07:00:00.000Z",
        "value": 61213,
        "surplus": 36052652.44965078
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-02T07:00:00.000Z",
        "value": 20000,
        "surplus": 287819036.9634333
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-06T07:00:00.000Z",
        "value": 37312,
        "surplus": 498292833.21633637
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-08T07:00:00.000Z",
        "value": 51432,
        "surplus": 1221801737.9813979
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-15T07:00:00.000Z",
        "value": 25332,
        "surplus": 247271464.23109663
      },
      {
        "group": "Dataset 4",
        "date": "2019-01-19T07:00:00.000Z",
        "value": null,
        "surplus": 12798.610559225932
      }
    ]

    const options = {
      "title": "Step (time series)",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "mapsTo": "value",
          "title": "Conversion rate",
          "scaleType": "linear"
        }
      },
      "curve": "curveStepAfter",
      "height": "400px"
    }

    return {
      data,
      options
    }
  }
}
</script>
