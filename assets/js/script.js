/* Breakpoints */
const tablet = 1050;
const smartphone = 700;
const small = 550;

/* Screen width */
let widthScreen = window.screen.width;

/* Pins */
const pins = [
  new ol.Feature({
    geometry: new ol.geom.Point([-50.15372, -25.11871]),
    name: 'Pin 1',
  }),
  new ol.Feature({
    geometry: new ol.geom.Point([-49.80726, -26.11818]),
    name: 'Pin 2',
  }),
  new ol.Feature({
    geometry: new ol.geom.Point([-51.08889, -26.2229]),
    name: 'Pin 3',
  })
];

/* Map */
const map = new ol.Map({
  target: 'map',
  interactions: ol.interaction.defaults({dragPan: widthScreen > smartphone ? true : false, mouseWheelZoom: widthScreen > smartphone ? true : false}).extend([
    new ol.interaction.DragPan({
      condition: function (event) {
        return this.getPointerCount() === 2 || ol.events.condition.platformModifierKeyOnly(event);
      },
    }),
    new ol.interaction.MouseWheelZoom({
      condition: ol.events.condition.platformModifierKeyOnly,
    }),
  ]),
  layers: [
    new ol.layer.Tile({
      className: 'bw',
      source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        className: 'icons',
        features: pins 
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          scale: 0.3,
          src: "/assets/images/pin.png"
        })
      })
    }),
  ],
  view: new ol.View({
    projection: 'EPSG:4326',
    center: [-50.448081050000006, -25.60710302150409],
    zoom: widthScreen > smartphone ? 9 : 7,
    minZoom: 7
  })
});