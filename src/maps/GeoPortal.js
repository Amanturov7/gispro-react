import React, { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import FormControl from 'react-bootstrap/FormControl';
import MyNavbar from '../components/MyNavbar';
import "./GeoPortal.css";

const GeoPortal = () => {
    const [darkMap, setDarkMap] = useState(false);
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedLayers, setSelectedLayers] = useState([]);
    const [layerVisibility, setLayerVisibility] = useState({});

    const mapRef = useRef(null); // Ссылка на карту

    // Информация об источниках данных WMS
    const wmsSources = {
        'http://planting.caiag.kg/cgi-bin/mapserv.cgi?map=wms.map': ['aimak_en', 'plantedpointadm', 'oblast_en', 'plantinglot'],
        'http://localhost/geoserver/geonode/wms': ['geonode:batken', 'layer2', 'layer3'],
        'https://kyrgyzstan.sibelius-datacube.org:5000/': ['ModisAnomaly','ModisRGB']
    };

    useEffect(() => {
        if (selectedSource) {
            fetchLayers(selectedSource);
        }
    }, [selectedSource]);

    useEffect(() => {
        updateLayerVisibility();
    }, [selectedLayers, layerVisibility]);

    const fetchLayers = async (source) => {
        const layers = wmsSources[source];
        setSelectedLayers(layers);

        const initialVisibility = layers.reduce((acc, layerName) => {
            acc[layerName] = true;
            return acc;
        }, {});
        setLayerVisibility(initialVisibility);

        // Если карта еще не создана, создаем ее
        if (!mapRef.current) {
            const baseLayer = darkMap ?
                new TileLayer({
                    source: new OSM({
                        url: 'https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                    }),
                }) :
                new TileLayer({
                    source: new OSM(),
                });

            const map = new Map({
                target: 'map',
                layers: [baseLayer],
                view: new View({
                    center: fromLonLat([74.585901, 41.20438]),
                    zoom: 7,
                    maxZoom: 16,
                    minZoom: 5,
                }),
            });

            mapRef.current = map;
        }

        // Удаляем все слои WMS
        const map = mapRef.current;
        map.getLayers().forEach(layer => {
            if (layer instanceof TileLayer && layer.getSource() instanceof TileWMS) {
                map.removeLayer(layer);
            }
        });

        // Добавляем новые слои WMS
        layers.forEach(layerName => {
            const tileWMS = new TileWMS({
                url: source,
                params: { 'LAYERS': layerName, 'TILED': true },
                serverType: 'geoserver'
            });
            const tileLayer = new TileLayer({ source: tileWMS, visible: layerVisibility[layerName] });
            map.addLayer(tileLayer);
        });
    };

    const toggleDarkMap = () => {
        setDarkMap(!darkMap);
    };

    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    const handleWmsLayerToggle = (layerName) => {
        const updatedVisibility = { ...layerVisibility, [layerName]: !layerVisibility[layerName] };
        setLayerVisibility(updatedVisibility);
    };

    const updateLayerVisibility = () => {
        const map = mapRef.current;
        if (map) {
            map.getLayers().forEach(layer => {
                if (layer instanceof TileLayer && layer.getSource() instanceof TileWMS) {
                    const layerName = layer.getSource().getParams()['LAYERS'];
                    layer.setVisible(layerVisibility[layerName]);
                }
            });
        }
    };

    return (
        <div>
            <MyNavbar />
            <div className="container">
                <div className="wms-selector">
                    <FormControl as="select" value={selectedSource} onChange={handleSourceChange}>
                        <option value="">Выберите источник данных WMS</option>
                        {Object.keys(wmsSources).map(source => (
                            <option key={source} value={source}>{source}</option>
                        ))}
                    </FormControl>
                    {selectedLayers.length > 0 && (
                        <div>
                            <h5>Выберите слои:</h5>
                            {selectedLayers.map(layer => (
                                <div key={layer}>
                                    <input
                                        type="checkbox"
                                        checked={layerVisibility[layer]}
                                        onChange={() => handleWmsLayerToggle(layer)}
                                    />
                                    <label>{layer}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="map-container">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    );
};

export default GeoPortal;
