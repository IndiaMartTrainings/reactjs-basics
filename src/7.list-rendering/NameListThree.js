import React from 'react';

function NameListThree() {
    const persons = [
                        {
                            id: 1,
                            name: "Scott",
                            age: 45,
                            skill: "React"
                        },
                        {
                            id: 2,
                            name: "Adam",
                            age: 43,
                            skill: "Angular"
                        },
                        {
                            id: 3,
                            name: "Tuan",
                            age: 42,
                            skill: ".Net"
                        },
                        {
                            id: 4,
                            name: "Uma",
                            age: 39,
                            skill: "Javascript"
                        },
                    ]
    // const personList = persons.map((person) => {
    //     return <h2 key={person.id}>
    //         I am {person.name}.
    //         I am {person.age} years old. 
    //         I know {person.skill}
    //     </h2>
    // })

    const personList = persons.map((person) => (
        <h2 key={person.id}>
            I am {person.name}.
            I am {person.age} years old. 
            I know {person.skill}
        </h2>
    ))
return personList
}

export default NameListThree;
