import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box } from '@mui/material';
import { DarkMode, LightMode, Home, Person, Settings, Article, Send } from '@mui/icons-material';
import Footer from './components/Footer'; // подключаем футер
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import SettingsPage from './pages/Settings';
import Posts from './pages/Posts';
import Form from './pages/Form';

function App({ mode, setMode }) {
  return (
    <BrowserRouter>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tech Tracker
          </Typography>

          <NavButton icon={<Home />} to="/" text="Главная" />
          <NavButton icon={<Person />} to="/profile" text="Профиль" />
          <NavButton icon={<Settings />} to="/settings" text="Настройки" />
          <NavButton icon={<Article />} to="/posts" text="Посты" />
          <NavButton icon={<Send />} to="/form" text="Форма" />

          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ minHeight: 'calc(100vh - 100px)' }}> {/* Корректируем контейнер */}
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </Box>

      <Footer />
    </BrowserRouter>
  );
}

function NavButton({ icon, to, text }) {
  return (
    <Button component={Link} to={to} startIcon={icon} sx={{ mx: 0.5 }}>
      {text}
    </Button>
  );
}

export default App;
