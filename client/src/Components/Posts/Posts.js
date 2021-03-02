import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./postsStyles";
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid
          className={classes.smMargin}
          key={post._id}
          item={true}
          xs={12}
          sm={6}
        >
          <Post
            className={classes.actionDiv}
            post={post}
            setCurrentId={setCurrentId}
          ></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
