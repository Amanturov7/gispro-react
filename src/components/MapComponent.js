import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS } from 'ol/source';
import { fromLonLat } from 'ol/proj';

const MapComponent = ({ layers }) => {
    useEffect(() => {
        const geoserverWMSUrl = 'http://localhost/geoserver/geonode/wms';

        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                ...(layers ? layers.map(layerName => (
                    new TileLayer({
                        source: new TileWMS({
                            url: geoserverWMSUrl,
                            params: { 'LAYERS': layerName, 'TILED': true },
                            serverType: 'geoserver'
                        }),
                    })
                )) : [])
            ],
            view: new View({
                center: fromLonLat([74.585901, 41.20438]), // Центр карты (Кыргызстан)
                zoom: 7, // Уровень масштабирования
                maxZoom: 10, // Максимальный уровень масштабирования
                minZoom: 5, // Минимальный уровень масштабирования
            }),
        });

        return () => {
            map.dispose();
        };
    }, [layers]);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    );
};

export default MapComponent;
