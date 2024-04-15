import React, { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import FormControl from 'react-bootstrap/FormControl';
import MyNavbar from '../components/MyNavbar';
import FooterSection from '../components/footer2';

import "./GeoPortal.css";

const GeoPortal = () => {
    const [darkMap, setDarkMap] = useState(false);
    const [selectedSource, setSelectedSource] = useState('http://planting.caiag.kg/cgi-bin/mapserv.cgi?map=wms.map'); // Выбранный источник данных WMS по умолчанию
    const [selectedLayers, setSelectedLayers] = useState([]);
    const [layerVisibility, setLayerVisibility] = useState({});
    const mapRef = useRef(null); // Ссылка на карту

    // Информация об источниках данных WMS
    const wmsSources = {
        'http://planting.caiag.kg/cgi-bin/mapserv.cgi?map=wms.map': {
            name: 'http://planting.caiag.kg/cgi-bin/mapserv.cgi?map=wms.map',
            label: 'Planting caiag',
            layers: [
                { name: 'aimak_en', label: 'Аймаки' },
                { name: 'plantedpointadm', label: 'Точки посадки' },
                { name: 'oblast_en', label: 'Области' },
                { name: 'plantinglot', label: 'Земельные участки' }
            ]
        },
        'http://localhost/geoserver/geonode/wms': {
            name: 'http://localhost/geoserver/geonode/wms',
            label: 'Gispro',
            layers: [
                { name: 'geonode:batken', label: 'Баткен' },
                { name: 'layer2', label: 'Слой 2' },
                { name: 'layer3', label: 'Слой 3' }
            ]
        },
        'https://kyrgyzstan.sibelius-datacube.org:5000/': {
            name: 'https://kyrgyzstan.sibelius-datacube.org:5000/',
            label: 'Sibelius',
            layers: [
                { name: 'ModisAnomaly', label: 'Аномалии Modis' },
                { name: 'ModisRGB', label: 'RGB Modis' }
            ]
        }
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
        const { layers } = wmsSources[source];
        setSelectedLayers(layers);

        const initialVisibility = layers.reduce((acc, { name }) => {
            acc[name] = false; // Устанавливаем все слои выключенными по умолчанию
            return acc;
        }, {});
        setLayerVisibility(initialVisibility);

        // Создаем карту, если она еще не создана
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
        layers.forEach(({ name, label }) => {
            const tileWMS = new TileWMS({
                url: source,
                params: { 'LAYERS': name, 'TILED': true },
                serverType: 'geoserver'
            });
            const tileLayer = new TileLayer({ source: tileWMS, visible: false }); // Все слои WMS изначально выключены
            map.addLayer(tileLayer);
        });
    };

    const toggleDarkMap = () => {
        setDarkMap(!darkMap);
    };

    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    const handleWmsLayerToggle = (name) => {
        const updatedVisibility = { ...layerVisibility, [name]: !layerVisibility[name] };
        setLayerVisibility(updatedVisibility);
    };

    const updateLayerVisibility = () => {
        const map = mapRef.current;
        if (map) {
            map.getLayers().forEach(layer => {
                if (layer instanceof TileLayer && layer.getSource() instanceof TileWMS) {
                    const name = layer.getSource().getParams()['LAYERS'];
                    layer.setVisible(layerVisibility[name]);
                }
            });
        }
    };

    return (
        <div>
            <MyNavbar />
            <div className="container-geo">
                <div className="wms-selector">
                <h5>Выберите источник данных</h5>

                    <FormControl  className="" as="select" value={selectedSource} onChange={handleSourceChange}>
                        <option value="">Выберите источник данных WMS</option>
                        {Object.keys(wmsSources).map(source => (
                            <option key={source} value={source}>{wmsSources[source].label}</option>
                        ))}
                    </FormControl>
                    {selectedLayers.length > 0 && (
                        <div>
                            <h5>Выберите слои</h5>
                            {selectedLayers.map(({ name, label }) => (
                                <div key={name}>
                                    <input
                                        type="checkbox"
                                        checked={layerVisibility[name]}
                                        onChange={() => handleWmsLayerToggle(name)}
                                    />
                                    <label>{label}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="map-container">
                    <div id="map"></div>
                </div>
            </div>
            <FooterSection />

        </div>
    );
};

export default GeoPortal;
