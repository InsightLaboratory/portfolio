import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  onClose: () => void;
};

export default function ExplorationViewer({ onClose }: Props) {
  const mapRef = useRef<L.Map | null>(null);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const mapContainer = document.getElementById("exploration-map");
    if (!mapContainer) return;

    const map = L.map(mapContainer, {
      center: [-31.4, -64.2],
      zoom: 12,
      zoomControl: true,
    });

    mapRef.current = map;

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles © Esri",
      }
    ).addTo(map);

    L.marker([-31.4, -64.2])
      .addTo(map)
      .bindPopup("Exploration Area")
      .openPopup();

    // 🧭 EVENTO GEO (clave)
    map.on("mousemove", (e: L.LeafletMouseEvent) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });

    // Fix render overlay
    setTimeout(() => map.invalidateSize(), 200);
    setTimeout(() => map.invalidateSize(), 800);

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div style={styles.overlay}>
      <div style={styles.panel}>
        <div style={styles.header}>
          <span>Exploration Viewer</span>
          <button onClick={onClose} style={styles.closeBtn}>
            ✕
          </button>
        </div>

        <div style={styles.coords}>
          Lat: {coords.lat.toFixed(5)} | Lon: {coords.lng.toFixed(5)}
        </div>

        <div
          id="exploration-map"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    width: "80%",
    height: "70%",
    background: "#0a0f0a",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 30px rgba(0,255,120,0.2)",
    display: "flex",
    flexDirection: "column" as const,
  },
  header: {
    padding: "10px",
    color: "#00ff88",
    borderBottom: "1px solid rgba(0,255,120,0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#00ff88",
    fontSize: "16px",
    cursor: "pointer",
  },
  coords: {
    padding: "6px 10px",
    fontSize: "12px",
    color: "#00ff88",
    borderBottom: "1px solid rgba(0,255,120,0.1)",
    fontFamily: "monospace",
  },
  map: {
    width: "100%",
    height: "100%",
  },
};
