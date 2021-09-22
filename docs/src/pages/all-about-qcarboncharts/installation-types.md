---
title: Installation Types
desc: How to install QCarbonCharts
keys: All about QCarbonCharts
related:
  - /all-about-qcarboncharts/what-is-qcarboncharts
  - /contributing/bugs-and-feature-requests
  - /contributing/sponsor
---
First off, it's important to know that QCarbonCharts has many modular components that make up it's entirety. Installing as QCarbonCharts __will install all these components__. However, you may want to install them individually.

The components are:

1. QccAreaSimple
2. QccAreaStacked
3. QccBarGrouped
4. QccBarSimple
5. QccBarStacked
6. QccBoxplot
7. QccBubble
8. QccBullet
9. QccCirclePack
10. QccCombo
11. QccDonut
12. QccGuage
13. QccHistogram
14. QccLine
15. QccLollipop
16. QccMeter
17. QccPie
18. QccRadar
19. QccScatter
20. QccTreemap
21. QccWordCloud

These are also many ways to add the charting components to your project. You can install as a Quasar CLI app-extension. You might want to write your own boot file (for targeting one or more charting components). You might want to use pre-compiled sources in dist or directly from the src folder (src folder access means your project needs to transpile QCarbonCharts sources). Or, you may want to use a UMD variant.

## Quasar CLI

### App Extension

::: warning
By using the app extension, you will get **all** QCarbonCharts components installed and registered within your application.
:::

#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext add qcarboncharts
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext remove qcarboncharts
```

#### Describe
When installed as an App Extension, you can use `quasar describe QCarbonCharts`. You can replace `QCarbonCharts` with any of the charting types types (ex: `quasar describe QccBubble`).


### Or Create and register a boot file

::: tip
This is the preferred way if you are targeting one or more calendar components.
:::

```
$ yarn add quasar-ui-qcarboncharts
# or
$ npm install quasar-ui-qcarboncharts
```
Then
```js
import { boot } from 'quasar/wrappers'
import Plugin from 'quasar-ui-qcarboncharts/src/QccBubble.js'
import 'quasar-ui-qcarboncharts/src/css/qcarboncharts.sass'

export default boot(({ app }) => {
  app.use(Plugin)
})
```
Additionally, because you are accessing the sources this way, you will need to make sure your project will transpile the code.

In `quasar.conf.js` update the following:

```js
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  'app.sass',
  '~quasar-ui-qcarboncharts/src/css/qcarboncharts.sass'
],

build: {
  transpile = true,
  transpileDependencies: [
    /quasar-ui-qcarboncharts[\\/]src/
  ]
}
```

### Or target as a component import

::: tip
There are several variants for each calendar component, including common, es (modern), and UMD as well as minified versions of each of those. The same goes for the css, including min and rtl.
:::

:::
```html
<style src="quasar-ui-qcarboncharts/dist/qcarboncharts.min.css"></style>

<script>
import { QccBubble } from 'quasar-ui-qcarboncharts/dist/QccBubble.esm.js'

export default {
  components: {
    QccBubble
  }
}
</script>
```
:::

## Vue CLI or Vite
### Vue project from src

:::
```js
import Plugin from 'quasar-ui-qcarboncharts/src/QccBubble.js'
import 'quasar-ui-qcarboncharts/src/css/qcarboncharts.sass'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Vue project from dist

:::
```js
import Plugin from 'quasar-ui-qcarboncharts/dist/QccBubble.esm.js'
import 'quasar-ui-qcarboncharts/dist/qcarboncharts.min.css'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Or component import

:::
```html
<style src="quasar-ui-qcarboncharts/dist/qcarboncharts.min.css"></style>

<script>
import { QccBubble } from 'quasar-ui-qcarboncharts/dist/QccBubble.esm.js'

export default {
  components: {
    QccBubble
  }
}
</script>
```
:::

## UMD variant

Exports `window.QccBubble`.

### Quasar install

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/qcarboncharts.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/QccBubble.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/QccBubble.rtl.min.css" rel="stylesheet" type="text/css">
```

### Vue install

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/qcarboncharts.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body: -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/QccBubble.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-qcarboncharts/dist/qcarboncharts.rtl.min.css" rel="stylesheet" type="text/css">
```

Your Vue source:
```js
const app = Vue.createApp({
  setup() {
    // ...your set up methods
  }
});

app.component("QccBubble", QccBubble.QccBubble);
app.mount("#app");
```


## Testing on Codepen
TODO
[QCalendar v4 Collection](https://codepen.io/collection/qOBOEG)
or
[QCalendarDay UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/ZEemBjm)
[QCalendarDay (week) UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/YzZRpdW)
[QCalendarMonth UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/dyvpYwW)
[QCalendarMonth (minimode) UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/VwpVmNj)
[QCalendarAgenda UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/MWpzbRZ)
[QCalendarResource UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/xxqQgbG)
[QCalendarScheduler UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/oNZQBLz)
[QCalendarTask UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/RwwwKQL)

# Project source
Can be found [here](https://github.com/hawkeye64/quasar-ui-qcarboncharts/tree/master).
