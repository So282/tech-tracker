import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const initialPosts = [
  {
    id: 1,
    title: 'Изучение React',
    text: 'React позволяет создавать компонентные и масштабируемые интерфейсы.',
    date: '14.12.2025',
  },
  {
    id: 2,
    title: 'React Router',
    text: 'Маршрутизация позволяет создавать SPA-приложения.',
    date: '15.12.2025',
  },
  {
    id: 3,
    title: 'Material UI',
    text: 'MUI ускоряет разработку и делает интерфейс современным.',
    date: '16.12.2025',
  },
];

function Posts() {
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const handleClickOpen = (post) => {
    setEditPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditPost(null);
  };

  const handleSave = () => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === editPost.id ? { ...post, ...editPost } : post
      )
    );
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Посты
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card
              sx={{
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <ArticleIcon color="primary" />
                <Typography variant="h6" fontWeight={600} mt={1}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {post.text}
                </Typography>
                <Typography variant="caption" display="block" mt={2}>
                  {post.date}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" onClick={() => handleClickOpen(post)}>
                  Редактировать
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Редактировать пост</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Заголовок"
            type="text"
            fullWidth
            variant="outlined"
            value={editPost?.title || ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="text"
            label="Текст"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={editPost?.text || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={handleSave} color="primary">
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Posts;
