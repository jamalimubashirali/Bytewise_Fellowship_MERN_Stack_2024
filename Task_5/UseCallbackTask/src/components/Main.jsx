import React, { useState } from 'react'
import Search from './Search';

const allUsers = [
    'john',
    'alex',
    'Mubashir',
    'Samar',
    'Azhar',
];


const Main = () => {
    const [users, setUsers] = useState(allUsers);
    const handleSearch = (s) =>{
        const filterUsers  = allUsers.filter((user)=> user.includes(s),
    );
    setUsers(filterUsers);
    } 
  return (
    <div>
        <div className="userapp">
            <button onClick={
                () => setUsers(suffle(allUsers))
            }>
                Shuffle
            </button>
            <Search onChange = {handleSearch} />
            </div>
            {
                users.map((user) => (
                    <li key={user}>{user}</li>
                ))
            }
    </div>
  )
}

export default Main