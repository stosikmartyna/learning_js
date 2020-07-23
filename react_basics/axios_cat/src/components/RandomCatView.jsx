import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './randomCatView.css'; 

export const RandomCatView = () => {
    const [catData, setCatData] = useState([]);

    const fetchCatData = () => { 
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response => setCatData(response.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchCatData();
    }, []);

    return (
        <div className="main_container">
            <h1>Find your random cat!</h1>
            {catData.map(cat => <img src={cat.url} alt="cat_image" key={cat.id} /> )}
            <button onClick={fetchCatData}>Click</button>
        </div>
    )
}