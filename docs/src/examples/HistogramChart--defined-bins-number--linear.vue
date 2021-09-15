<template>
  <q-page padding>
    <q-charts-histogram
      :data="data"
      :options="options" />
  </q-page>
</template>

<script>
import QCarbonChartsHistogram from 'quasar-ui-qcarboncharts/src/components/QCarbonChartsHistogram'
import 'quasar-ui-qcarboncharts/src/components/qcarboncharts.sass'

export default {
  components: {
    QCarbonChartsHistogram
  },
  setup() {
    const data = [
      {
        "group": "Dataset 1",
        "value": 200
      },
      {
        "group": "Dataset 1",
        "value": 210
      },
      {
        "group": "Dataset 1",
        "value": 230
      },
      {
        "group": "Dataset 1",
        "value": 210
      },
      {
        "group": "Dataset 1",
        "value": 230
      },
      {
        "group": "Dataset 1",
        "value": 240
      },
      {
        "group": "Dataset 1",
        "value": 250
      },
      {
        "group": "Dataset 1",
        "value": 255
      },
      {
        "group": "Dataset 1",
        "value": 290
      },
      {
        "group": "Dataset 1",
        "value": 300
      },
      {
        "group": "Dataset 1",
        "value": 320
      },
      {
        "group": "Dataset 1",
        "value": 330
      },
      {
        "group": "Dataset 1",
        "value": 320
      },
      {
        "group": "Dataset 1",
        "value": 330
      },
      {
        "group": "Dataset 1",
        "value": 320
      },
      {
        "group": "Dataset 1",
        "value": 330
      },
      {
        "group": "Dataset 1",
        "value": 340
      },
      {
        "group": "Dataset 1",
        "value": 350
      },
      {
        "group": "Dataset 1",
        "value": 300
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 420
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 450
      },
      {
        "group": "Dataset 1",
        "value": 460
      },
      {
        "group": "Dataset 1",
        "value": 465
      },
      {
        "group": "Dataset 1",
        "value": 468
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 450
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 480
      },
      {
        "group": "Dataset 1",
        "value": 500
      },
      {
        "group": "Dataset 1",
        "value": 550
      },
      {
        "group": "Dataset 1",
        "value": 660
      },
      {
        "group": "Dataset 1",
        "value": 580
      },
      {
        "group": "Dataset 1",
        "value": 700
      },
      {
        "group": "Dataset 1",
        "value": 780
      },
      {
        "group": "Dataset 1",
        "value": 710
      },
      {
        "group": "Dataset 1",
        "value": 750
      },
      {
        "group": "Dataset 1",
        "value": 830
      },
      {
        "group": "Dataset 1",
        "value": 860
      },
      {
        "group": "Dataset 1",
        "value": 870
      },
      {
        "group": "Dataset 1",
        "value": 200
      },
      {
        "group": "Dataset 1",
        "value": 210
      },
      {
        "group": "Dataset 1",
        "value": 230
      },
      {
        "group": "Dataset 1",
        "value": 210
      },
      {
        "group": "Dataset 1",
        "value": 230
      },
      {
        "group": "Dataset 1",
        "value": 240
      },
      {
        "group": "Dataset 1",
        "value": 290
      },
      {
        "group": "Dataset 1",
        "value": 300
      },
      {
        "group": "Dataset 1",
        "value": 340
      },
      {
        "group": "Dataset 1",
        "value": 345
      },
      {
        "group": "Dataset 1",
        "value": 350
      },
      {
        "group": "Dataset 1",
        "value": 380
      },
      {
        "group": "Dataset 1",
        "value": 380
      },
      {
        "group": "Dataset 1",
        "value": 275
      },
      {
        "group": "Dataset 1",
        "value": 260
      },
      {
        "group": "Dataset 1",
        "value": 262
      },
      {
        "group": "Dataset 1",
        "value": 223
      },
      {
        "group": "Dataset 1",
        "value": 218
      },
      {
        "group": "Dataset 1",
        "value": 333
      },
      {
        "group": "Dataset 1",
        "value": 385
      },
      {
        "group": "Dataset 1",
        "value": 300
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 444
      },
      {
        "group": "Dataset 1",
        "value": 433
      },
      {
        "group": "Dataset 1",
        "value": 450
      },
      {
        "group": "Dataset 1",
        "value": 375
      },
      {
        "group": "Dataset 1",
        "value": 455
      },
      {
        "group": "Dataset 1",
        "value": 458
      },
      {
        "group": "Dataset 1",
        "value": 460
      },
      {
        "group": "Dataset 1",
        "value": 477
      },
      {
        "group": "Dataset 1",
        "value": 480
      },
      {
        "group": "Dataset 1",
        "value": 484
      },
      {
        "group": "Dataset 1",
        "value": 400
      },
      {
        "group": "Dataset 1",
        "value": 430
      },
      {
        "group": "Dataset 1",
        "value": 450
      },
      {
        "group": "Dataset 1",
        "value": 480
      },
      {
        "group": "Dataset 1",
        "value": 500
      },
      {
        "group": "Dataset 1",
        "value": 550
      },
      {
        "group": "Dataset 1",
        "value": 660
      },
      {
        "group": "Dataset 1",
        "value": 618
      },
      {
        "group": "Dataset 1",
        "value": 720
      },
      {
        "group": "Dataset 1",
        "value": 621
      },
      {
        "group": "Dataset 1",
        "value": 823
      },
      {
        "group": "Dataset 1",
        "value": 525
      },
      {
        "group": "Dataset 1",
        "value": 630
      },
      {
        "group": "Dataset 1",
        "value": 635
      },
      {
        "group": "Dataset 1",
        "value": 637
      },
      {
        "group": "Dataset 1",
        "value": 644
      },
      {
        "group": "Dataset 1",
        "value": 580
      },
      {
        "group": "Dataset 1",
        "value": 570
      },
      {
        "group": "Dataset 1",
        "value": 575
      },
      {
        "group": "Dataset 1",
        "value": 578
      },
      {
        "group": "Dataset 1",
        "value": 582
      },
      {
        "group": "Dataset 1",
        "value": 591
      },
      {
        "group": "Dataset 1",
        "value": 700
      },
      {
        "group": "Dataset 1",
        "value": 780
      },
      {
        "group": "Dataset 1",
        "value": 710
      },
      {
        "group": "Dataset 1",
        "value": 750
      },
      {
        "group": "Dataset 1",
        "value": 830
      },
      {
        "group": "Dataset 1",
        "value": 860
      },
      {
        "group": "Dataset 1",
        "value": 870
      }
    ]

    const options = {
      "title": "Histogram (defined bins number) (linear)",
      "axes": {
        "bottom": {
          "title": "US $ (million)",
          "mapsTo": "value",
          "bins": 67,
          "limitDomainToBins": true
        },
        "left": {
          "title": "No. of transactions",
          "scaleType": "linear",
          "binned": true
        }
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
