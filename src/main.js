"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("ol/ol.css");
var Map_1 = require("ol/Map");
var View_1 = require("ol/View");
var XYZ_1 = require("ol/source/XYZ");
var Tile_1 = require("ol/layer/Tile");
var proj_1 = require("ol/proj"); //这里要注意
var MapInstance = /** @class */ (function () {
    function MapInstance() {
        this.map = new Map_1.default({
            target: "root",
            view: new View_1.default({
                center: proj_1.fromLonLat([119.60753817138888, 30.49043631527778]),
                projection: "EPSG:3857",
                zoom: 12 //加载地图的层级
            }),
            layers: [
                new Tile_1.default({
                    source: new XYZ_1.default({
                        attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
                        url: 'https://services.arcgisonline.com/arcgis/rest/services/' +
                            'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}',
                        maxZoom: 15,
                        projection: 'EPSG:4326',
                        tileSize: 512,
                        maxResolution: 180 / 512,
                        wrapX: true,
                    }),
                })
            ]
        });
    }
    return MapInstance;
}());
exports.default = new MapInstance();
