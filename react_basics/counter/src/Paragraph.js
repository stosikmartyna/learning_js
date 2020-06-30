import React from 'react';

export const Paragraph = ({textFromProps}) => {
    const textContent = 'Hello';

    const client = {
        title: 'Mr',
        name: 'John',
        surname: 'Smith',
        clientNumber: 13243546,
    }
    
    const {title, name, surname, clientNumber} = client;
    // const title = client.title
    // const name = client.name
    // const surname = client.surname 
    // ...

    return (
        <>
            <p>{textContent} {textFromProps}</p>
            <p>Client: {title} {name} {surname} ({clientNumber})</p>
        </>
    )
}