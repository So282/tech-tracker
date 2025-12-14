import {
  Grid,
  Card,
  CardContent,
  Typography
} from '@mui/material';

import Greeting from '../components/Greeting';
import UserCard from '../components/UserCard';
import Counter from '../components/Counter';
import UserProfile from '../components/UserProfile';
import UserSettings from '../components/UserSettings';

const cardStyle = {
  height: '100%',
  transition: '0.3s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
};

function Home() {
  return (
    <>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Главная
      </Typography>

      <Grid container spacing={3}>
        {[Greeting, UserCard, Counter].map((Comp, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={cardStyle}>
              <CardContent>
                <Comp />
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <UserProfile />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={cardStyle}>
            <CardContent>
              <UserSettings />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
