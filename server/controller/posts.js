import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//get all the posts
export const getPosts = async(req, res) => {
    try {
        const postMessage = await PostMessage.find({});
        res.status(200).send(postMessage);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const createPost = async(req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(409).send({ message: error.message });
    }
};

export const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = PostMessage.find({ _id });
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No posts with this Id");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
        new: true,
    });
    res.status(200).json().send(updatedPost);
};