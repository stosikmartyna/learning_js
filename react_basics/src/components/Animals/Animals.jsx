import React, {useState} from 'react';
import './Animals.css';

export const Animals = () => {
    const [animal, setAnimal] = useState(undefined)

    const handleAnimalsChanged = (event) => {
        setAnimal(event.target.value)
    }

    const animalsImgs = {
        tiger: 'https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/hero_small/Medium_WW226365.jpg?1574452099',
        lion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg',
        dog: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*',
        cougar: 'https://www.vmcdn.ca/f/files/kamloopsmatters/images/contributed-photos/cougar.jpg;w=960'
    }
    
    const animalsArr = [
        {name: 'Tiger', continent: 'Asia', img: animalsImgs.tiger},
        {name: 'Lion', continent: 'Africa', img: animalsImgs.lion},
        {name: 'Dog', continent: 'Europe', img: animalsImgs.dog},
        {name: 'Cougar', continent: 'America', img: animalsImgs.cougar},
    ]

    return (
        <>
            <p>{animal}</p>
            <input type="text" onChange={handleAnimalsChanged}/>

            <hr />

            <div className="animal-container">
                {animalsArr.map(animal => {
                    return (
                        <div className="animal-box">
                            <img src={animal.img}/>
                            <h2>{animal.name}</h2>
                            <h3>{animal.continent}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}