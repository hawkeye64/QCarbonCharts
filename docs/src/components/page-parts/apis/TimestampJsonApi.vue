<template>
<div></div>
  <!-- <json-api-viewer
    title="Timestamp API"
    type="Library"
    :json="json"
    starting-tab="methods"
    no-menu
  /> -->
</template>

<script>
import { defineComponent } from 'vue'
// import Api from 'quasar-ui-qcharts/dist/api/charts.json'

export default defineComponent({
  name: 'TimestampJsonApi',
  setup () {
    return {
      // json: Api
    }
  }
})
</script>
