import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert
} from '@mui/material';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Все поля обязательны');
      setSuccess(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Введите корректный email');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
    setName('');
    setEmail('');
  };

  return (
    <Box sx={{ maxWidth: 400, mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Форма обратной связи
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Форма отправлена</Alert>}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Имя"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
}

export default Form;
