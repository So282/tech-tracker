import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  Chip,
  Button
} from '@mui/material';
import {
  Person,
  School,
  LocationOn,
  Code
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

function Profile() {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem('avatar', reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar
            src={avatar}
            sx={{
              width: 100,
              height: 100,
              bgcolor: 'primary.main',
              fontSize: 36,
            }}
          >
            А
          </Avatar>

          <Button variant="outlined" component="label">
            Загрузить фото
            <input hidden type="file" accept="image/*" onChange={handleAvatarChange} />
          </Button>

          <Typography variant="h5" fontWeight={700}>
            Артём СО
          </Typography>

          <Typography color="text.secondary">
            Frontend-разработчик
          </Typography>

          <Divider flexItem />

          <Stack spacing={1} alignSelf="flex-start">
            <Typography><Person sx={{ mr: 1 }} /> Группа: <b>ЭФБО 09-24</b></Typography>
            <Typography><LocationOn sx={{ mr: 1 }} /> Город: <b>Москва</b></Typography>
            <Typography><School sx={{ mr: 1 }} /> Направление: <b>ИТ</b></Typography>
          </Stack>

          <Divider flexItem />

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip icon={<Code />} label="React" />
            <Chip icon={<Code />} label="JavaScript" />
            <Chip icon={<Code />} label="Material UI" />
            <Chip icon={<Code />} label="SPA" />
          </Stack>

          <Typography variant="body2" color="text.secondary" align="center">
            Учебный проект (практики 19–26).  
            Реализация React, Router, hooks и UI-библиотек.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Profile;
