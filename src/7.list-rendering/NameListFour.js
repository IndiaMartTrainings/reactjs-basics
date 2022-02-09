import React from 'react';
import Person from './Person';

function NameListFour() {
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
                        }
                    ]

            return (
                <div className="container">
                    <h1>List of Names</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Skill</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                persons.map(person => <Person key={person.id} person={person} />)
                            }
                        </tbody>
                    </table>
                </div>
            )
}

export default NameListFour;


