import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from "ol/proj";//这里要注意

class MapInstance {
  
  map: Map;

  constructor() {
    this.map = new Map({
      target: "root",//这里是填的是上面的id
      view: new View({
        center: fromLonLat([119.60753817138888, 30.49043631527778]),//地图加载的中心点
        projection: "EPSG:3857",
        zoom: 12//加载地图的层级
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
            url:
              'https://services.arcgisonline.com/arcgis/rest/services/' +
              'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}',
            maxZoom: 15,
            projection: 'EPSG:4326',
            tileSize: 512, // the tile size supported by the ArcGIS tile service
            maxResolution: 180 / 512, // Esri's tile grid fits 180 degrees on one 512 px tile
            wrapX: true,
          }),
        })
      ]
    });
  }
}

export default new MapInstance();