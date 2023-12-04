const express = require('express');
const db = require('./db/DBConnection');
let restaurants = require('./db/data/Restaurants_in_Wake_County.json');
const cookieParser = require('cookie-parser');
const restRouter = express.Router();
restRouter.use(cookieParser());
restRouter.use(express.json());
const { TokenMiddleware } = require('./middleware/TokenMiddleware');
const geolib = require('geolib');

restRouter.get('/nearby', TokenMiddleware, (req, res) => {
    const ne = JSON.parse(req.query.ne);
    const sw = JSON.parse(req.query.sw);
    
    let nearbyRestaurants = [];

    for (const line of restaurants.features) {
        if (line.properties.FACILITYTYPE === 'Restaurant') {
            const restaurantLatitude = line.geometry.coordinates[1];
            const restaurantLongitude = line.geometry.coordinates[0];

            if (restaurantLatitude >= Math.min(ne.lat, sw.lat) &&
                    restaurantLatitude <= Math.max(ne.lat, sw.lat) &&
                    restaurantLongitude >= Math.min(ne.lng, sw.lng) &&
                    restaurantLongitude <= Math.max(ne.lng, sw.lng)) {
                const value = {
                    id: line.properties.OBJECTID,
                    name: line.properties.NAME,
                    coordinates: [restaurantLatitude, restaurantLongitude],
                };
                nearbyRestaurants.push(value);
            }
        }
    }

    res.json(nearbyRestaurants);
});

restRouter.get('/all', TokenMiddleware, (req, res) => {
    let list = [];
    for (const line of restaurants.features) {
        if (line.properties.FACILITYTYPE == "Restaurant") {
            let value = {
                id : line.properties.OBJECTID,
                name : line.properties.NAME,
                coordinates : [line.geometry.coordinates[1], line.geometry.coordinates[0]]
            }
            list.push(value);
        }
    }
    res.json(list);
});

//Get restaurant details
restRouter.get('/:restID', TokenMiddleware, (req, res) => {
    const id = req.params.restID;
    const line = restaurants.features.find(line => line.properties.OBJECTID == id);
    let value = {
        id : line.properties.OBJECTID,
        name : line.properties.NAME,
        coordinates : line.geometry.coordinates
    }
    res.json(value);
});

//Get restaurant notes
restRouter.get('/:restID/notes', TokenMiddleware, (req, res) => {
    let matching = [];
    db.query('SELECT * FROM note WHERE note_restID=?', [req.params.restID]).then(({result}) => {
        for(const line of results) {
            matching.push(line);
        }
        res.json(matching);
    });
});

module.exports = restRouter;