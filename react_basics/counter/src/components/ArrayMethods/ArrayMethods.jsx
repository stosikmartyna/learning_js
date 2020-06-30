import React from 'react';

export const ArrayMethods = () => {
    const users = [
        { name: 'Martyna', age: 25 },
        { name: 'Mateusz', age: 24 },
        { name: 'Ala', age: 30 },    
        { name: 'Alena', age: 17 },
    ]
    
    return (
        <>
            <ul>
                {users.map((user) => <li>My name is {user.name} and I'm {user.age}</li>)}
            </ul>

            <hr/>

            {users.filter((user) => user.age > 24).map((user) => <li>My name is {user.name} and I'm {user.age}</li>)}

            <hr/>

            {users.filter(user => user.name.startsWith('M')).map(user => <li>{user.name}</li>)}
        </>
    )
    
}