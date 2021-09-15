import QCarbonChartsAreaSimple from './components/QCarbonChartsAreaSimple'
import QCarbonChartsAreaStacked from './components/QCarbonChartsAreaStacked'
import QCarbonChartsBarGrouped from './components/QCarbonChartsBarGrouped'
import QCarbonChartsBarSimple from './components/QCarbonChartsBarSimple'
import QCarbonChartsBarStacked from './components/QCarbonChartsBarStacked'
import QCarbonChartsBoxplot from './components/QCarbonChartsBoxplot'
import QCarbonChartsBubble from './components/QCarbonChartsBubble'
import QCarbonChartsBullet from './components/QCarbonChartsBullet'
import QCarbonChartsCirclePack from './components/QCarbonChartsCirclePack'
import QCarbonChartsCombo from './components/QCarbonChartsCombo'
import QCarbonChartsDonut from './components/QCarbonChartsDonut'
import QCarbonChartsGuage from './components/QCarbonChartsGuage'
import QCarbonChartsHistogram from './components/QCarbonChartsHistogram'
import QCarbonChartsLine from './components/QCarbonChartsLine'
import QCarbonChartsLollipop from './components/QCarbonChartsLollipop'
import QCarbonChartsMeter from './components/QCarbonChartsMeter'
import QCarbonChartsPie from './components/QCarbonChartsPie'
import QCarbonChartsRadar from './components/QCarbonChartsRadar'
import QCarbonChartsScatter from './components/QCarbonChartsScatter'
import QCarbonChartsTreemap from './components/QCarbonChartsTreemap'
import QCarbonChartsWordCloud from './components/QCarbonChartsWordCloud'


const version = __UI_VERSION__

function install (app) {
  app.component(QCarbonChartsAreaSimple.name, QCarbonChartsAreaSimple)
  app.component(QCarbonChartsAreaStacked.name, QCarbonChartsAreaStacked)
  app.component(QCarbonChartsBarGrouped.name, QCarbonChartsBarGrouped)
  app.component(QCarbonChartsBarSimple.name, QCarbonChartsBarSimple)
  app.component(QCarbonChartsBarStacked.name, QCarbonChartsBarStacked)
  app.component(QCarbonChartsBoxplot.name, QCarbonChartsBoxplot)
  app.component(QCarbonChartsBubble.name, QCarbonChartsBubble)
  app.component(QCarbonChartsBullet.name, QCarbonChartsBullet)
  app.component(QCarbonChartsCirclePack.name, QCarbonChartsCirclePack)
  app.component(QCarbonChartsCombo.name, QCarbonChartsCombo)
  app.component(QCarbonChartsDonut.name, QCarbonChartsDonut)
  app.component(QCarbonChartsGuage.name, QCarbonChartsGuage)
  app.component(QCarbonChartsHistogram.name, QCarbonChartsHistogram)
  app.component(QCarbonChartsLine.name, QCarbonChartsLine)
  app.component(QCarbonChartsLollipop.name, QCarbonChartsLollipop)
  app.component(QCarbonChartsMeter.name, QCarbonChartsMeter)
  app.component(QCarbonChartsPie.name, QCarbonChartsPie)
  app.component(QCarbonChartsRadar.name, QCarbonChartsRadar)
  app.component(QCarbonChartsScatter.name, QCarbonChartsScatter)
  app.component(QCarbonChartsTreemap.name, QCarbonChartsTreemap)
  app.component(QCarbonChartsWordCloud.name, QCarbonChartsWordCloud)
}

export {
  version,
  QCarbonChartsAreaSimple,
  QCarbonChartsAreaStacked,
  QCarbonChartsBarGrouped,
  QCarbonChartsBarSimple,
  QCarbonChartsBarStacked,
  QCarbonChartsBoxplot,
  QCarbonChartsBubble,
  QCarbonChartsBullet,
  QCarbonChartsCirclePack,
  QCarbonChartsCombo,
  QCarbonChartsDonut,
  QCarbonChartsGuage,
  QCarbonChartsHistogram,
  QCarbonChartsLine,
  QCarbonChartsLollipop,
  QCarbonChartsMeter,
  QCarbonChartsPie,
  QCarbonChartsRadar,
  QCarbonChartsScatter,
  QCarbonChartsTreemap,
  QCarbonChartsWordCloud,

  install
}
