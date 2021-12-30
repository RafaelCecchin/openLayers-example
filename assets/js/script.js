const features = [
  new ol.Feature({
    geometry: new ol.geom.Point([-50.15372, -25.11871]),
    name: 'WLE - Matriz',
  }),
  new ol.Feature({
    geometry: new ol.geom.Point([-49.80726, -26.11818]),
    name: 'WLE - Filial 1',
  }),
  new ol.Feature({
    geometry: new ol.geom.Point([-51.08889, -26.2229]),
    name: 'WLE - Filial 2',
  })
];

const map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults({mouseWheelZoom:false}),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        features: features 
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 200],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          scale: 0.3,
          src: 'assets/images/marcador-de-mapa-wle.png'
        })
      })
    })
  ],
  view: new ol.View({
    projection: 'EPSG:4326',
    center: [-50.448081050000006, -25.60710302150409],
    zoom: 9,
    minZoom: 7
  })
});