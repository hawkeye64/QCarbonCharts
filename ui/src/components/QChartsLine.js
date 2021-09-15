import { h, ref, onMounted } from 'vue'
import { LineChart } from '@carbon/charts'
import useBaseChart, { useBaseChartProps } from '../composables/BaseChart'

export default {
  name: 'QCarbonChartsLine',

  props: {
    ...useBaseChartProps
  },

  setup (props, { expose }) {
    const { coreChart } = useBaseChart(props)
    const chartRef = ref(null)

    onMounted(() => {
      coreChart.value = new LineChart(chartRef.value, {
        data: props.data,
        options: props.options,
      })
    })

    expose({
      coreChart
    })

    function __renderChart () {
      return h('div', {
        ref: chartRef,
        class: 'q-charts q-charts-line'
      })
    }

    return __renderChart
  }

}