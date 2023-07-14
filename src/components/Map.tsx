import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const Map = () => {
  return (
    <MapContainer
      className="h-[80vh] w-screen"
      center={[-25.442286, -49.27984]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-25.442286, -49.27984]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
