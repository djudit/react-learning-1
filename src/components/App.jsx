import { Product } from './Product';
import { Button } from './Button/Button';
import { Reader } from './Reader/Reader';
// import { PaymentForm } from './PaymentForm';
import articles from '../../articles.json';
import './App.css';
import { useId, useState } from 'react';
import { Filter } from './Filter';
import { Users } from './Users';
import { UserForm } from './UserForm';

export default function App() {
  const [nameFilter, setnameFilter] = useState('');
  const [users, setUsers] = useState([
    { username: 'Jacob', access: 'r', id: 85154 },
    { username: 'Mango', access: 'w', id: 90365 },
    { username: 'Elena', access: 'r', id: 17056 },
    { username: 'Orlando', access: 'm', id: 34108 },
    { username: 'Gimli', access: 'w', id: 92558 },
  ]);

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, { username: newUser, id: Date.now() }];
    });
  };

  const deleteUser = userId => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const visibleUsers = users.filter(user =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
  );

  // const makePayment = options => {
  //   console.log('makePayment: ', options);
  // };

  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product />

      <Button />
      <Button />

      <Reader items={articles} />

      {/* <PaymentForm onSubmit={makePayment} /> */}

      <UserForm onAdd={addUser} />
      <hr />
      <Filter value={nameFilter} onChange={setnameFilter} />
      <Users items={visibleUsers} onDelete={deleteUser} />
    </div>
  );
}

// ----------------------------------------------------------
// Підняття стану

// import { useState } from 'react';

// // ClickCounter отримує функцію onUpdate (ім'я пропа),
// // яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// }

// ------------------------------------------------------
// Оновлення об'єктів

// import { useState } from 'react';

// export default function App() {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// }

// -----------------------------------------------------------
// Модуль2 Заняття 2

// import { useState, useEffect } from 'react';

// const getInitialClicks = () => {
//   const savedClicks = window.localStorage.getItem('number-of-clicks');
//   // console.log(typeof JSON.parse(savedClicks));

//   if (savedClicks !== null) {
//     return JSON.parse(savedClicks);
//   }
//   return 0;
// };

// export default function App() {
//   const [clicks, setClicks] = useState(getInitialClicks);

//   const [date, setDate] = useState(Date.now());

//   useEffect(() => {
//     console.log('MOUNT EFFECT');
//   }, []);

//   useEffect(() => {
//     console.log('code inside useEffect', clicks);
//     window.localStorage.setItem('number-of-clicks', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     console.log('Log, when date state changes ', date);
//   }, [date]);

//   // useEffect(() => {
//   //   console.log('Effect on mount');

//   //   const id = setInterval(() => {
//   //     console.log(Date.now());
//   //   }, 20000);

//   //   return () => {
//   //     console.log('effecr cleanup');
//   //     clearInterval(id);
//   //   };
//   // }, []);

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
//       <button onClick={() => setDate(Date.now())}>Date: {date}</button>
//     </>
//   );
// }
