import React from 'react'

const ChildCompo = React.memo(({ user, onClick, onToggleFav, isFavorite }) => {
  return (
    <li>
      <span onClick={() => onClick(user.id)}>
        {user.id} - {user.name} - {user.email} - {user.city}
      </span>
      <button onClick={() => onToggleFav(user.id)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
      
    </li>
  );
});

export default ChildCompo



