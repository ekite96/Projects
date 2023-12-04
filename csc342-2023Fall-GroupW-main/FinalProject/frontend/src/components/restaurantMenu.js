import React, { useState, useEffect } from 'react';
import api from '../static/js/APIClient.js';
import StarRating from './starRating.js';
import { cleanRestaurant } from '../static/js/utils.js';

function groupNotesByDish(notes) {
    const groupedNotes = {};

    notes.forEach((note) => {
        const { dish, ...restOfNote } = note;

        if (!groupedNotes[dish]) {
            groupedNotes[dish] = [];
        }

        groupedNotes[dish].push({ ...restOfNote });
    });

    return groupedNotes;
}

function avgDishRating(notes) {
    const totalRating = notes.reduce((sum, note) => sum + note.rating, 0);
    const avgRating = Math.round(totalRating / notes.length);
    return avgRating;
}

const RestaurantMenu = ({ restaurantId, open }) => {
    const [notes, setNotes] = useState([])
    const [restaurant, setRestaurant] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const restNotes = await api.getRestaurantNotes(restaurantId);
                const rest = await api.getRestaurantbyID(restaurantId);
                setNotes(restNotes);
                setRestaurant(cleanRestaurant(rest));
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        if (restaurantId) {
            fetchData();
        }
    }, [restaurantId, open]);

    return (
        <div>
            <h5>{`${restaurant?.name} Menu`}</h5>
            {
                notes && notes.length > 0 ?
                Object.entries(groupNotesByDish(notes)).map(([dish, userNotes]) => {
                    return (
                        <div className="card m-2" key={dish}>
                            <div className="header rounded">
                                <h3>{dish}</h3>
                                <StarRating value={avgDishRating(userNotes)} readonly />
                            </div>

                            <div className="body">
                                {
                                    userNotes.map((note, index) => {
                                        return (
                                            <div key={note.id}>
                                                <div>{note.body}</div>
                                                {index !== userNotes.length - 1 && <hr className="my-2" />}
                                            </div>
                                        );
                                    })

                                }
                            </div>
                        </div>
                    )
                })
                :
                <span className="fst-italic fw-lighter">no known menu items</span>
            }
        </div>
    );
};

export default RestaurantMenu;
