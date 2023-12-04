import React, { useState } from 'react';
import api from '../static/js/APIClient.js';
import StarRating from './starRating.js';

const AddNote = ({ restaurantId, close }) => {
    const [dishName, setDishName] = useState('');
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!dishName || !rating || !body) {
            alert('Please fill in all fields');
            return;
        }
        const user = await api.getCurrentUser();
        if (navigator.onLine) {
            api.newNote(
                user.id,
                restaurantId,
                dishName,
                parseInt(rating, 10),
                body,
            );
        } else {
            // User is offline, store the form data locally
            const offlineFormData = {
                userID: user.id,
                restaurantId: restaurantId,
                dish: dishName,
                rating: parseInt(rating, 10),
                body: body,
            };

            // Store the form data in local storage
            const storedFormData = JSON.parse(localStorage.getItem('offlineFormData')) || [];
            storedFormData.push(offlineFormData);
            localStorage.setItem('offlineFormData', JSON.stringify(storedFormData));
        }
        // Reset the form after submission
        setDishName('');
        setRating(0);
        setBody('');
        close();
    };

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">
                            Dish Name:
                            <input type="text" className="form-control" value={dishName} onChange={(e) => setDishName(e.target.value)} />
                        </label>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <StarRating value={rating} onChange={setRating} size={4}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <textarea className="form-control" placeholder="write your thoughts here..." rows={6} value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3 offset-md-3">
                        <button onClick={close} className="btn btn-secondary">
                            Close
                        </button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={handleSubmit} className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddNote;