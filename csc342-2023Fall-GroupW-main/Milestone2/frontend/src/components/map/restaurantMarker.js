import { Marker, Popup } from 'react-leaflet'

const RestaurantMarker = (lat, long, restaurantName, restaurantId) => {
    return (
        <Marker key={restaurantId} position={[lat, long]}>
            <Popup>
                <h3>{restaurantName}</h3>
                <ul className="nav nav-tabs" id="myTabs">
                    <li className="nav-item">
                        <a className="nav-link active" id="tab1" data-toggle="tab" href={`#${restaurantId}/overall`}>Overall</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="tab2" data-toggle="tab" href={`#${restaurantId}/menu`}>Menu</a>
                    </li>
                </ul>

                <div className="tab-content mt-2">
                    <div className="tab-pane fade show active" id={`${restaurantId}/overall`}>
                        <h3>Overall</h3>
                        <p>{restaurantName}</p>
                    </div>
                    <div className="tab-pane fade" id={`${restaurantId}/menu`}>
                        <h3>Menu</h3>
                        <p>menu content</p>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default RestaurantMarker;
