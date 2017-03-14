d3.playbooks.choroplethMap({
  elementId: 'cruhr-viz__map--17',
  geoDataUrl: './data/geo/nrw-landkreise.topo.json',
  dataUrl: './data/2017-03-14_masern-impfquote.csv',
  color: d3.schemeCorrectivRuhr5.reverse()
}).render()

.infobox({
  element: '#cruhr-viz__infobox--17',
  template: `
    Impfquote: <strong>{display_value}</strong><br>
    untersuchte Kinder: <strong>{einschulung}</strong><br>
    gueltiger Impfpass: <strong>{impfpass}</strong>
  `

})

.legend({
  element: '#cruhr-viz__legend--17',
  itemTemplate: '<li class="d3-playbooks__legend-item"><span style="background-color:{color};"></span>{label} %</li>'
})

.selector({
  element: '#cruhr-viz__selector--17',
})
