import React, { useState, useEffect } from 'react';
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
    const [mapLayers, setMapLayers] = useState([]);
    const [selectedSource, setSelectedSource] = useState('');
    const [layerVisibility, setLayerVisibility] = useState({});

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
        updateWmsLayers();
    }, [darkMap]);

    const fetchLayers = async (source) => {
        const layers = wmsSources[source];
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
                        url: source,
                        params: { 'LAYERS': layerName, 'TILED': true },
                        serverType: 'geoserver'
                    }),
                })
            )) : [])
        ];

        setMapLayers(newMapLayers);

        const initialVisibility = layers.reduce((acc, layerName) => {
            acc[layerName] = true;
            return acc;
        }, {});
        setLayerVisibility(initialVisibility);

        const map = new Map({
            target: 'map',
            layers: newMapLayers,
            view: new View({
                center: fromLonLat([74.585901, 41.20438]),
                zoom: 7,
                maxZoom: 16,
                minZoom: 5,
            }),
        });

        return () => {
            map.dispose();
        };
    };

    const toggleDarkMap = () => {
        setDarkMap(!darkMap);
    };

    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };

    const updateWmsLayers = () => {
        setMapLayers(prevLayers => {
            return prevLayers.map(layer => {
                layer.setVisible(!darkMap);
                return layer;
            });
        });
    };

    const handleWmsLayerToggle = (layerName) => {
        const updatedVisibility = { ...layerVisibility, [layerName]: !layerVisibility[layerName] };
        setLayerVisibility(updatedVisibility);

        const updatedLayers = mapLayers.filter(layer => layer instanceof TileLayer && layer.getSource() instanceof TileWMS && layer.getSource().getParams()['LAYERS'] === layerName);
        updatedLayers.forEach(layer => layer.setVisible(updatedVisibility[layerName]));
        setMapLayers(updatedLayers);
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
                </div>
                <div className="map-container">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    );
};

export default GeoPortal;
