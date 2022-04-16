const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Post = require('../models/Posts');
const Profile = require('../models/Profil');
const User = require('../models/User');
const passport = require('passport')

//   Create a post
router.post(
    '/',
    [passport.authenticate("jwt", { session: false }), [check('text', 'Text is required').not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
  
      try {
        const user = await User.findById(req.user.id).select('-password');
  
        const newPost = new Post({
          text: req.body.text,
          name: user.name,
          user: req.user.id,
        });
  
        const post = await newPost.save();
  
        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  //  Get all posts

  router.get('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const posts = await Post.find().sort({ date: -1 });
  
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  // Get post by ID
  router.get('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) return res.status(404).json({ msg: 'Post not found' });
  
      res.json(post);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId')
        return res.status(404).json({ msg: 'Post not found' });
      res.status(500).send('Server Error');
    }
  });

  // Delete a post
  router.delete('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      
      // Check user
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await post.remove();
  
      res.json({ msg: 'Post removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });

  //  Like a post
  router.put('/like/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has already been liked
      if (post.likes.some((like) => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post already liked' });
      }
  
      post.likes.unshift({ user: req.user.id });
  
      await post.save();
  
      return res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  //  Unlike a post
  router.put('/unlike/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has already been liked
      if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post has not yet been liked' });
      }
  
      // remove the like
      post.likes = post.likes.filter(
        ({ user }) => user.toString() !== req.user.id
      );
  
      await post.save();
  
      return res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // Comment on a post
  router.post(
    '/comment/:id',
    [passport.authenticate("jwt", { session: false }), [check('text', 'Text is required').not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
  
      try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);
  
        const newComment = new Post({
          text: req.body.text,
          name: user.name,
          user: req.user.id,
        });
  
        post.comments.unshift(newComment);
  
        await post.save();
  
        res.json(post.comments);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  // Delete comment
  router.delete('/comment/:id/:comment_id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Pull out comment
      const comment = post.comments.find(
        (comment) => comment.id === req.params.comment_id
      );
      // Make sure comment exists
      if (!comment) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }
      // Check user
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      post.comments = post.comments.filter(
        ({ id }) => id !== req.params.comment_id
      );
  
      await post.save();
  
      return res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;