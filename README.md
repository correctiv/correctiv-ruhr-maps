# correctiv-ruhr-maps

simple maps for correctiv.ruhr

see `index.html` for base map example, and `index2.html` for integration into correctiv article layout.


## cms plugin

### context

example:

```json
{
  "type": "districts",
  "data": "2017-03-14_masern-impfquoten",
  "figureTitle": "Impfquote",
  "dataSource": "Landeszentrum Gesundheit NRW",
  "dataSourceUrl": "https://www.lzg.nrw.de/",
  "colorSteps": "5",
  "colorReverse": "true",
  "selector": "true",
  "infoboxTemplate": "Impfquote: <strong>{display_value}</strong>",
  "legendTemplate": "{label} %"
}
```


### init js

```html
<script>
d3.playbooks.correctivRuhrMaps.%type%({
  id: "%id%",
  path: "%path%",
  dataUrl: "%path%data/%data%.csv",
  colorSteps: "%colorSteps%",
  colorReverse: "%colorReverse%",
  selector: "%selector%",
  infoboxTemplate: "%infoboxTemplate%",
  legendTemplate: "%legendTemplate%"
})
</script>
```


### html

```html
<figure class="cruhr-viz figure -paragraph-width">
  <div class="cruhr-viz figure__container">
    <div class="cruhr-viz__selector" id="cruhr-viz__selector--%id%"></div>
    <div class="cruhr-viz__infobox" id="cruhr-viz__infobox--%id%"></div>
    <div class="cruhr-viz__map" id="cruhr-viz__map--%id%"></div>
    <figcaption class="cruhr-viz__legend-wrapper figure__caption">
      <div class="figure__title"><p>%figureTitle%</p></div>
      <div class="cruhr-viz__legend" id="cruhr-viz__legend--%id%"></div>
      <div class="figure__credits">
        <p><strong>Daten:</strong> <a href="%dataSourceUrl%">%dataSource%</a></p>
      </div>
    </figcaption>
  </div>
</figure>
```

### js

```
lib/d3.v4.min.js
lib/topojson.v2.min.js
lib/riot.min.js
lib/d3-playbooks.maps.min.js
lib/d3-playbooks.riot-components.min.js
correctiv-ruhr-maps.min.js
```


### css

```
correctiv-ruhr-maps.min.css
```



## build deps

`npm install babel-cli babel-preset-es2015 uglify-js node-sass`

### js

`babel correctiv-ruhr-maps.js | uglifyjs -c -m > correctiv-ruhr-maps.min.js`

### css

`sass -t compressed correctiv-ruhr-maps.scss:correctiv-ruhr-maps.min.css`
