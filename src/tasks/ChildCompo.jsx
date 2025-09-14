import React from 'react'

const ChildCompo = React.memo(({ user, onClick }) => {
  console.log(`Rendering ${user.name}`); // Shows which rows actually render
  return (
    <li onClick={() => onClick(user.id)}>
      {user.id} - {user.name} - {user.email} - {user.city}
    </li>
  );
});

export default ChildCompo;
