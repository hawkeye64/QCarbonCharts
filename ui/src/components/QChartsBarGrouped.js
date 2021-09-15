import { h, ref, onMounted } from 'vue'
import { GroupedBarChart } from '@carbon/charts'
import useBaseChart, { useBaseChartProps } from '../composables/BaseChart'

export default {
  name: 'QCarbonChartsBarGrouped',

  props: {
    ...useBaseChartProps
  },

  setup (props, { expose }) {
    const { coreChart } = useBaseChart(props)
    const chartRef = ref(null)

    onMounted(() => {
      coreChart.value = new GroupedBarChart(chartRef.value, {
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
        class: 'q-charts q-charts-bar-grouped'
      })
    }

    return __renderChart
  }

}