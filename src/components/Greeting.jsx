function Greeting() {
  const userName = 'Студент';
  const hour = new Date().getHours();

  let greetingText;

  if (hour < 12) {
    greetingText = 'Доброе утро';
  } else if (hour < 18) {
    greetingText = 'Добрый день';
  } else {
    greetingText = 'Добрый вечер';
  }

  return (
    <div className="greeting">
      <h2>{greetingText}, {userName}!</h2>
      <p>Добро пожаловать в учебный трекер технологий.</p>
    </div>
  );
}

export default Greeting;
