import React, { useState } from 'react';
import db from './Firebase';


function FUpload() {
    const [data, setData] = useState('');
    // const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add code here to push data to Firestore
        // Push data to Firestore
        await db.collection('users').add({
            data: data

        });

        // Clear form fields after submitting
        setData('');

    };


    return (
        <div className="App">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />

                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default FUpload;
