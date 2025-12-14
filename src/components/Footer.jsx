import { Box, Typography, Link, Container } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
        position: 'relative', // меняем на fixed
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="inherit">
          © 2025 Трекер технологий. Все права защищены.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="https://github.com/username" target="_blank" color="inherit">
            <GitHub />
          </Link>
          <Link href="https://linkedin.com/in/username" target="_blank" color="inherit">
            <LinkedIn />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
