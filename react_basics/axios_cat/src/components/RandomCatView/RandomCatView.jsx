import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../Spinner/Spinner';
import './randomCatView.css'; 

const BASE_PATH = 'https://api.thecatapi.com/v1';

export const RandomCatView = () => {
    const [catData, setCatData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [catBreeds, setCatBreeds] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchCatData = async() => { 
        setIsFetching(true);
        try {
            const response = await axios.get(`${BASE_PATH}/images/search`, {params: {size: 'small'}})
            setCatData(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsFetching(false);
        }
    }    

    const fetchCatBreeds = async() => {
        try {
            const response = await axios.get(`${BASE_PATH}/breeds`)
            setCatBreeds(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCatData();
        fetchCatBreeds();
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const selectedCat = catBreeds.find(cat => cat.name === inputValue);

    return (
        <div className="main_container">
            <button onClick={fetchCatData}>🐱 Switch Cat</button>
            {isFetching 
                ? <Spinner /> 
                : catData.map(cat => {
                    return <img src={cat.url} alt="cat_image" key={cat.id} /> 
                })
            }
            <div className="main_container_breeds">
                <h2>Cat breeds</h2>
                <select name="cat_breeds" onChange={handleInputChange}>
                    <option>Choose breed</option>
                    {catBreeds.map(breed => {
                        return <option value={breed.name} key={breed.id}>{breed.name}</option>
                    })}
                </select>
                <p>{selectedCat && selectedCat.description}</p>
            </div>
        </div>
    )
}