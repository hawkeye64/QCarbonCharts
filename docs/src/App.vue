<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

import { provideMarkdownStore } from 'assets/markdown-store.js'
import getMeta from 'assets/get-meta.js'

export default defineComponent({
  name: 'App',

  setup () {
    useMeta({
      title: 'QCharts » Build Beautiful, Responsive Charts',
      titleTemplate: title => `${ title } » QCharts`,

      meta: getMeta(
        'QCharts - Line, Area, Bar, Bubble, Donut, Guage, Histogram, Pie, Radar, Scatter and many more for your Vue Apps',
        'QCharts is a wrapper around the powerful Carbon Charts.'
      )
    })

    provideMarkdownStore()
  }
})
</script>
