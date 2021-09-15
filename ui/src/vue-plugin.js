import QChartsAreaSimple from './components/QChartsAreaSimple'
import QChartsAreaStacked from './components/QChartsAreaStacked'
import QChartsBarGrouped from './components/QChartsBarGrouped'
import QChartsBarSimple from './components/QChartsBarSimple'
import QChartsBarStacked from './components/QChartsBarStacked'
import QChartsBoxplot from './components/QChartsBoxplot'
import QChartsBubble from './components/QChartsBubble'
import QChartsBullet from './components/QChartsBullet'
import QChartsCirclePack from './components/QChartsCirclePack'
import QChartsCombo from './components/QChartsCombo'
import QChartsDonut from './components/QChartsDonut'
import QChartsGuage from './components/QChartsGuage'
import QChartsHistogram from './components/QChartsHistogram'
import QChartsLine from './components/QChartsLine'
import QChartsLollipop from './components/QChartsLollipop'
import QChartsMeter from './components/QChartsMeter'
import QChartsPie from './components/QChartsPie'
import QChartsRadar from './components/QChartsRadar'
import QChartsScatter from './components/QChartsScatter'
import QChartsTreemap from './components/QChartsTreemap'
import QChartsWordCloud from './components/QChartsWordCloud'


const version = __UI_VERSION__

function install (app) {
  app.component(QChartsAreaSimple.name, QChartsAreaSimple)
  app.component(QChartsAreaStacked.name, QChartsAreaStacked)
  app.component(QChartsBarGrouped.name, QChartsBarGrouped)
  app.component(QChartsBarSimple.name, QChartsBarSimple)
  app.component(QChartsBarStacked.name, QChartsBarStacked)
  app.component(QChartsBoxplot.name, QChartsBoxplot)
  app.component(QChartsBubble.name, QChartsBubble)
  app.component(QChartsBullet.name, QChartsBullet)
  app.component(QChartsCirclePack.name, QChartsCirclePack)
  app.component(QChartsCombo.name, QChartsCombo)
  app.component(QChartsDonut.name, QChartsDonut)
  app.component(QChartsGuage.name, QChartsGuage)
  app.component(QChartsHistogram.name, QChartsHistogram)
  app.component(QChartsLine.name, QChartsLine)
  app.component(QChartsLollipop.name, QChartsLollipop)
  app.component(QChartsMeter.name, QChartsMeter)
  app.component(QChartsPie.name, QChartsPie)
  app.component(QChartsRadar.name, QChartsRadar)
  app.component(QChartsScatter.name, QChartsScatter)
  app.component(QChartsTreemap.name, QChartsTreemap)
  app.component(QChartsWordCloud.name, QChartsWordCloud)
}

export {
  version,
  QChartsAreaSimple,
  QChartsAreaStacked,
  QChartsBarGrouped,
  QChartsBarSimple,
  QChartsBarStacked,
  QChartsBoxplot,
  QChartsBubble,
  QChartsBullet,
  QChartsCirclePack,
  QChartsCombo,
  QChartsDonut,
  QChartsGuage,
  QChartsHistogram,
  QChartsLine,
  QChartsLollipop,
  QChartsMeter,
  QChartsPie,
  QChartsRadar,
  QChartsScatter,
  QChartsTreemap,
  QChartsWordCloud,

  install
}
