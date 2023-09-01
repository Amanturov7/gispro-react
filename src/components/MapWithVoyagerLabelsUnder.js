import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapWithVoyagerLabelsUnder = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    // Создаем карту и устанавливаем центр и уровень масштабирования
    const map = L.map(mapRef.current).setView([55.76, 37.64], 13);

    // Добавляем тайлы с картой "Voyager Labels Under" в качестве подложки
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/voyager_labels_under/{z}/{x}/{y}{r}.png",
      {
        attribution: "© CartoDB",
        maxZoom: 18,
      }
    ).addTo(map);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapWithVoyagerLabelsUnder;
