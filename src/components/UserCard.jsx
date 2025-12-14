function UserCard() {
  const user = {
    name: 'Студент',
    role: 'Frontend разработчик',
    city: 'Москва'
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Роль: {user.role}</p>
      <p>Город: {user.city}</p>
    </div>
  );
}

export default UserCard;
