'use client';

import { useEffect, useRef } from 'react';
//@ts-ignore
import L from 'leaflet';
import styles from './style.module.scss';
import 'leaflet/dist/leaflet.css';
const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
//@ts-ignore
  const imagesSrc = [
    'https://spb.ros-spravka.ru/upload/iblock/77c/trk-uljnka.jpg',
    'https://avatars.mds.yandex.net/get-altay/14209766/2a000001933056926a96e79f842cafdbd820/XXXL',
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([40.1930833, 44.2628611], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const points = [
      { lat: 40.1930833, lng: 44.2628611 },
    ];

//@ts-ignore
    points.forEach((point, index) => {
      L.marker([point.lat, point.lng], { icon: customIcon })
        .addTo(map)
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className={styles.block}>
      <div className={styles.map}>
        <div
          ref={mapRef}
          style={{ height: '400px', width: '100%' }}
          aria-label="Карта с местоположением точек"
        />
      </div>
    </div>
  );
};

export default MapComponent;