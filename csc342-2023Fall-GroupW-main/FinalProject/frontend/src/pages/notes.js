import React, { useEffect, useState } from 'react';
import api from '../static/js/APIClient.js';
import StarRating from '../components/starRating.js';
import NoteGallery from '../components/noteGallery';

const NoteCard = ({ restaurantName, dish, rating, body, date }) => {
    return (
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title">{restaurantName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{dish}</h6>
                <StarRating value={rating} readonly />
                <p className="card-text">{body}</p>
                <p className="card-text">{new Date(date).toDateString()}</p>
            </div>
        </div>
    );
};

export const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await api.getCurrentUser();
                const userNotes = await api.getUserNotes(user.id);
                for (let i = 0; i < userNotes.length; i++) {
                    userNotes[i]["restaurantName"] = (await api.getRestaurantbyID(userNotes[i].restID)).name;
                }
                setNotes(userNotes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="header">My Notes</div>
            {
                notes.map(note => {
                    return <NoteCard key={note.id} {...note}/>
                })
            }
        </div>
    );
};

export default Notes;
