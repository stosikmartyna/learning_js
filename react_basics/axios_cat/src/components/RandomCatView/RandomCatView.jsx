import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../Spinner/Spinner';
import './randomCatView.css'; 

export const RandomCatView = () => {
    const [catData, setCatData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [catBreeds, setCatBreeds] = useState([]);
    const [inputValue, setInputValue] = useState('');

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

    const fetchCatBreeds = async() => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/breeds')
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
            <label>Cat breeds</label>
            <select name="cat_breeds" onChange={handleInputChange}>
                <option>Choose breed</option>
                {catBreeds.map(breed => {
                    return <option value={breed.name} key={breed.id}>{breed.name}</option>
                })}
            </select>

            <p>{selectedCat && selectedCat.description}</p>
        </div>
    )
}