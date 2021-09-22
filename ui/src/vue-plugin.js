import QccAreaSimple from './components/QccAreaSimple'
import QccAreaStacked from './components/QccAreaStacked'
import QccBarGrouped from './components/QccBarGrouped'
import QccBarSimple from './components/QccBarSimple'
import QccBarStacked from './components/QccBarStacked'
import QccBoxplot from './components/QccBoxplot'
import QccBubble from './components/QccBubble'
import QccBullet from './components/QccBullet'
import QccCirclePack from './components/QccCirclePack'
import QccCombo from './components/QccCombo'
import QccDonut from './components/QccDonut'
import QccGuage from './components/QccGuage'
import QccHistogram from './components/QccHistogram'
import QccLine from './components/QccLine'
import QccLollipop from './components/QccLollipop'
import QccMeter from './components/QccMeter'
import QccPie from './components/QccPie'
import QccRadar from './components/QccRadar'
import QccScatter from './components/QccScatter'
import QccTreemap from './components/QccTreemap'
import QccWordCloud from './components/QccWordCloud'


const version = __UI_VERSION__

function install (app) {
  app.component(QccAreaSimple.name, QccAreaSimple)
  app.component(QccAreaStacked.name, QccAreaStacked)
  app.component(QccBarGrouped.name, QccBarGrouped)
  app.component(QccBarSimple.name, QccBarSimple)
  app.component(QccBarStacked.name, QccBarStacked)
  app.component(QccBoxplot.name, QccBoxplot)
  app.component(QccBubble.name, QccBubble)
  app.component(QccBullet.name, QccBullet)
  app.component(QccCirclePack.name, QccCirclePack)
  app.component(QccCombo.name, QccCombo)
  app.component(QccDonut.name, QccDonut)
  app.component(QccGuage.name, QccGuage)
  app.component(QccHistogram.name, QccHistogram)
  app.component(QccLine.name, QccLine)
  app.component(QccLollipop.name, QccLollipop)
  app.component(QccMeter.name, QccMeter)
  app.component(QccPie.name, QccPie)
  app.component(QccRadar.name, QccRadar)
  app.component(QccScatter.name, QccScatter)
  app.component(QccTreemap.name, QccTreemap)
  app.component(QccWordCloud.name, QccWordCloud)
}

export {
  version,
  QccAreaSimple,
  QccAreaStacked,
  QccBarGrouped,
  QccBarSimple,
  QccBarStacked,
  QccBoxplot,
  QccBubble,
  QccBullet,
  QccCirclePack,
  QccCombo,
  QccDonut,
  QccGuage,
  QccHistogram,
  QccLine,
  QccLollipop,
  QccMeter,
  QccPie,
  QccRadar,
  QccScatter,
  QccTreemap,
  QccWordCloud,

  install
}
