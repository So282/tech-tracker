import useLocalStorage from '../hooks/useLocalStorage';

function UserSettings() {
  const [name, setName] = useLocalStorage('userName', 'Студент');

  return (
    <div className="user-settings">
      <h2>Настройки пользователя</h2>

      <label>
        Имя пользователя:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <p>Текущее имя: <strong>{name}</strong></p>
    </div>
  );
}

export default UserSettings;
