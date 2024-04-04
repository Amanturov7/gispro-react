import React, { useState, useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS } from 'ol/source';
import { fromLonLat } from 'ol/proj';

const MapComponent = ({ layers }) => {
    const [darkMap, setDarkMap] = useState(false);
    const [mapLayers, setMapLayers] = useState([]);

    useEffect(() => {
        const geoserverWMSUrl = 'http://localhost/geoserver/geonode/wms';

        const baseLayer = darkMap ? 
            new TileLayer({
                source: new OSM({
                    url: 'https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                }),
            }) :
            new TileLayer({
                source: new OSM(),
            });

        const newMapLayers = [
            baseLayer,
            ...(layers ? layers.map(layerName => (
                new TileLayer({
                    source: new TileWMS({
                        url: geoserverWMSUrl,
                        params: { 'LAYERS': layerName, 'TILED': true },
                        serverType: 'geoserver'
                    }),
                })
            )) : [])
        ];

        setMapLayers(newMapLayers);

        const map = new Map({
            target: 'map',
            layers: newMapLayers,
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
    }, [layers, darkMap]);

    const toggleDarkMap = () => {
        setDarkMap(!darkMap);
    };

    return (
        <div>
        <div className="toggle-container">
            <button className={`toggle-button ${darkMap ? 'dark' : 'light'}`} onClick={toggleDarkMap}>
                <div className={`toggle-circle ${darkMap ? 'dark' : 'light'}`}></div>
            </button>
            <span className={darkMap ? 'toggle-label dark' : 'toggle-label light'}>{darkMap ? 'Темный режим' : 'Светлый режим'}</span>
        </div>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
    
    );
};

export default MapComponent;
