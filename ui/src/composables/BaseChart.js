import { ref, watch } from 'vue'

export const useBaseChartProps = {
  data: {
    type: [ Array, Object ],
    required: true
  },
  options: {
    type: Object,
    required: true
  }
}

export default function (props) {
  const coreChart = ref(null)

  watch(() => props.data, newData => {
    coreChart.value.model.setData(newData)
  }, {
    deep: true
  })
  
  watch(() => props.options, newOptions => {
    coreChart.value.model.setOptions(newOptions)
  }, {
    deep: true
  })

  return {
    coreChart
  }
}