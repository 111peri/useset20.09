import  { useState } from 'react';

 export function MainPage() {

  const usersName = ["Anna", "John", "Joe"];
  const [users, setUsers] = useState(usersName);


  const addUsers = () => {
   const newUsers = [...users, "Frank", "Mila"];
   setUsers(newUsers)
  };

  const resetUsers = () => {
   setUsers([]);
  };

  return (
      <div>
       <h1>Список пользователя</h1>
       <button onClick={addUsers}>Добавить пользователей</button>
       <button onClick={resetUsers}>Сбросить</button>
       <ul>
        {users.length >0 ? (
            users.map((user, index) => (
                <li key={index}>{user}</li>
            ))
        ) : (
            <p>Список пуст</p>
        )}
       </ul>
      </div>
  );
 }


