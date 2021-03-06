import { h, ref, onMounted } from 'vue'
import { BulletChart } from '@carbon/charts'
import useBaseChart, { useBaseChartProps } from '../composables/BaseChart'

export default {
  name: 'QccBullet',

  props: {
    ...useBaseChartProps
  },

  setup (props, { expose }) {
    const { coreChart } = useBaseChart(props)
    const chartRef = ref(null)

    onMounted(() => {
      coreChart.value = new BulletChart(chartRef.value, {
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
        class: 'q-carbon-charts q-carbon-charts-bullet'
      })
    }

    return __renderChart
  }

}