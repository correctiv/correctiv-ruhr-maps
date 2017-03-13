// from ruhr theme css
const colors = ['#f9c280', '#efab59', '#a07337', '#5e4728', '#578574', '#61aba9', '#117a89', '#428bca']

d3.schemeCorrectivRuhr = colors

// continuous, computed via chroma.js
d3.schemeCorrectivRuhr7 = ['#f9c280', '#dfad71', '#c59962', '#ab8454', '#917045', '#775b36', '#5e4728']
d3.schemeCorrectivRuhr6 = ['#f9c280', '#daa96e', '#bb905c', '#9c784b', '#7d5f39', '#5e4728']
d3.schemeCorrectivRuhr5 = ['#f9c280', '#d2a36a', '#ab8454', '#84653e', '#5e4728']
d3.schemeCorrectivRuhr4 = ['#f9c280', '#c59962', '#917045', '#5e4728']

// categorical
d3.schemeCorrectivRuhr3 = [colors[0], colors[5], colors[7]]
d3.schemeCorrectivRuhr2 = [colors[1], colors[3]]


d3.playbooks.choroplethMap.defaults({
  cssNamespace: 'cruhr-viz',
  responsiveSvg: true,
  isTopojson: true,
  color: d3.schemeCorrectivRuhr7,
  width: 800,
  height: 800,
  getId: f => f.GEN,
  nullColor: '#f5f5f5'
})


const baseMap = ({
  geoDataUrl,
  dataUrl,
  id,
  infoboxTemplate,
  legendTemplate,
  selector,
  colorReverse,
  colorSteps
}) => {

  if (!colorSteps) colorSteps = 7
  if (!infoboxTemplate) infoboxTemplate = '<p><strong>{GEN}</strong><br>{display_value}</p>'
  if (!legendTemplate) legendTemplate = '{label}'

  let color = d3[`schemeCorrectivRuhr${colorSteps}`]
  if (colorReverse) color = color.reverse()

  const mapViz = d3.playbooks.choroplethMap({
    elementId: `cruhr-viz__map--${id}`,
    geoDataUrl,
    dataUrl,
    color
  }).render()

  .infobox({
    element: `#cruhr-viz__infobox--${id}`,
    template: infoboxTemplate
  })

  .legend({
    element: `#cruhr-viz__legend--${id}`,
    itemTemplate: `<li class="d3-playbooks__legend-item"><span style="background-color:{color};"></span>${legendTemplate}</li>`
  })

  if (selector) {

    mapViz.selector({
      element: `#cruhr-viz__selector--${id}`,
    })

  }


}

d3.playbooks.correctivRuhrMaps = {}

d3.playbooks.correctivRuhrMaps.districts = opts => {
  opts.geoDataUrl = `${opts.path}/data/geo/nrw-landkreise.topo.json`
  baseMap(opts)
}

d3.playbooks.correctivRuhrMaps.munis = opts => {
  opts.geoDataUrl = `${opts.path}/data/geo/nrw-gemeinden.topo.json`
  baseMap(opts)
}
