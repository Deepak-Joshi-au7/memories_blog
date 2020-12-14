import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find({});
    res.status(200).send(postMessage);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).send(newPost);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
