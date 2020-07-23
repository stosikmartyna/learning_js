import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../Spinner/Spinner';
import './randomCatView.css'; 

export const RandomCatView = () => {
    const [catData, setCatData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const fetchCatData = async() => { 
        setIsFetching(true);
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {params: {size: 'small'}})
            setCatData(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsFetching(false);
        }
    }

    useEffect(() => {
        fetchCatData();
    }, []);

    return (
        <div className="main_container">
            <button onClick={fetchCatData}>🐱 Switch Cat</button>
            {isFetching 
                ? <Spinner /> 
                : catData.map(cat => {
                    return <img src={cat.url} alt="cat_image" key={cat.id} /> 
                })
            }
        </div>
    )
}