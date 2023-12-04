import React, { useState, useEffect } from 'react';
import '../static/css/post-gallery.css';
import api from '../static/js/APIClient.js';

const NoteGallery = ({ notes }) => {
    const [restaurantNames, setRestaurantNames] = useState({});
    const [userNames, setUserNames] = useState({});

    useEffect(() => {
        // Fetch restaurant names for all unique restIDs
        const uniqueRestIDs = Array.from(new Set(notes.map((n) => n.note_restID)));
        const uniqueUserIDs = Array.from(new Set(notes.map((n) => n.note_userID)));

        const fetchRestaurantNames = async () => {
            const names = {};
            for (const restID of uniqueRestIDs) {
                const rest = await api.getRestaurantbyID(restID);
                names[restID] = rest.name;
            }
            setRestaurantNames(names);
        };
        const fetchUserNames = async () => {
            const usernames = {};
            for (const userID of uniqueUserIDs) {
                const user = await api.getUserbyID(userID);
                usernames[userID] = user.username;
            }
            setUserNames(usernames);
        };

        fetchRestaurantNames();
        fetchUserNames();
    }, [notes]);

    const Note = ({ userID, restID, dish, rating, body }) => {
        const restName = restaurantNames[restID] || 'Loading...';
        const username = userNames[userID] || 'Loading...';

        return (
            <div className="card">
                <div className="header">
                    <h1 className="user">@{username}</h1>
                    <h3 className="vendor">{restName}</h3>
                    <h2 className="dish">{dish}</h2>
                    <h5 className="rating">{rating}/5</h5>
                </div>
                <p className="body">{body}</p>
            </div>
        );
    };

    return (
        <div className="gallery">
            {notes.map((n) => (
                <Note key={n.note_id} userID={n.note_userID} restID={n.note_restID} dish={n.note_dish} rating={n.note_rating} body={n.note_body} />
            ))}
        </div>
    );
};

export default NoteGallery;
