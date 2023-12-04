import "../static/css/home.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import { UpdatingRestaurantMarkers } from "../components/map"

export const Home = () => {
    const defaultMapCenter = [35.8032, -78.5661];

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <MapContainer center={defaultMapCenter} zoom={16} minZoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <UpdatingRestaurantMarkers />
            </MapContainer>
        </div>
    )
}

export default Home;
