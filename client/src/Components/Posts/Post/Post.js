import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForeverTwoTone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './postStyles';

const Post = ({ post, setCurrentId }) => {
  console.log(post);
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(post);
  return (
    <Card className={classes.card} width='40%'>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />{' '}
      <div className={classes.overlay}>
        <Typography varient='h6'> {post.creator} </Typography>{' '}
        <Typography varient='h6'>
          {' '}
          {moment(post.CreatedAt).fromNow()}{' '}
        </Typography>{' '}
      </div>{' '}
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'red' }}
          size='small'
          onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>{' '}
      </div>{' '}
      <div className={classes.details}>
        <Typography varient='body2' color='textSecondary'>
          {' '}
          {post.tags.map((tag) => `#${tag}`)}{' '}
        </Typography>{' '}
      </div>{' '}
      <CardContent>
        <Typography className={classes.title} varient='h2' gutterBottom>
          {' '}
          {post.message}{' '}
        </Typography>{' '}
      </CardContent>{' '}
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          Like {post.likeCount}{' '}
        </Button>{' '}
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteForever fontSize='small' />
          Delete {post.likeCount}{' '}
        </Button>{' '}
      </CardActions>{' '}
    </Card>
  );
};

export default Post;
