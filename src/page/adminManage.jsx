import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import NavBar from '../layout/navBar';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const AdminManage = () => {
  const bangkokCenter = [13.7563, 100.5018];
  
  const sampleLocations = [
    // { id: 1, position: [13.7563, 100.5018], name: "กรุงเทพมหานคร" },
    // { id: 2, position: [13.7469, 100.5352], name: "สยามพารากอน" },
    // { id: 3, position: [13.7280, 100.5241], name: "วัดพระแก้ว" },
    // { id: 4, position: [13.7650, 100.5714], name: "สวนเบญจกิติ" },
    // { id: 5, position: [13.7278, 100.5159], name: "วัดโพธิ์" },
    // { id: 6, position: [13.7946, 100.5497], name: "จตุจักร" },
    // { id: 7, position: [13.7422, 100.5403], name: "ลุมพินี" },
    // { id: 8, position: [13.7525, 100.4935], name: "วัดอรุณ" },
    // { id: 9, position: [13.7469, 100.4891], name: "ไอคอนสยาม" },
    // { id: 10, position: [13.8131, 100.5611], name: "เซ็นทรัลลาดพร้าว" },
    {
        id: 1,
        name: 'Basic Tee',
        imageSrc: 'https://www.plastor.co.uk/images/detailed/27/Green_360_Litre_Wheelie_Bin.jpg',
        statusColor: "yellow",
        position: [13.8131, 100.5611],
        value: 50,
      },
      {
        id: 2,
        name: 'Basic Tee',
        imageSrc: 'https://www.plastor.co.uk/images/detailed/27/Green_360_Litre_Wheelie_Bin.jpg',
        statusColor: "red",
        position: [13.7469, 100.4891],
        value: 90,
      },
      {
        id: 3,
        name: 'Basic Tee',
        imageSrc: 'https://www.plastor.co.uk/images/detailed/27/Green_360_Litre_Wheelie_Bin.jpg',
        statusColor: "green",
        position: [13.7525, 100.4935],
        value: 30,
      },
      {
        id: 4,
        name: 'Basic Tee',
        imageSrc: 'https://www.plastor.co.uk/images/detailed/27/Green_360_Litre_Wheelie_Bin.jpg',
        statusColor: "green",
        position: [13.7946, 100.5497],
        value: 30,
      },
  ];

  const [markers, setMarkers] = useState(sampleLocations);

  const addMarker = (e) => {
    const newMarker = {
      id: Date.now(),
      position: [e.latlng.lat, e.latlng.lng],
      name: `position ${markers.length + 1}`
    };
    setMarkers([...markers, newMarker]);
  };

  return (
    <>
    <NavBar />
    <div className="px-20 py-20">
    <MapContainer
      center={bangkokCenter}
      zoom={11}
      style={{ height: '500px', width: '100%' }}
      onClick={addMarker}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            {marker.name}
            <br />
            {marker.position[0].toFixed(4)}
            <br />
            {marker.position[1].toFixed(4)}
            <br />
            {marker.value}%
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
    </>
  );
};

export default AdminManage;