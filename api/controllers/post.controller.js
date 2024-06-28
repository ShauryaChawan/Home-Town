import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    console.log("Got all posts !!");
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            id: true,
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          console.log("Got the a single post !!");
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    } else {
      console.log("Got the a single post !!");
      res.status(200).json({ ...post, isSaved: false });
    }
    // console.log("Got the a single post !!");
    // res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    res.status(200).json(newPost);
    console.log("Post created successfully !!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    // FINDING THE POST
    const post = await prisma.post.findUnique({
      where: { id },
    });

    // IF POST NOT FOUND
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // CHECKING POST'S USER_ID AND tokenUserId
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    // UPDATING POST
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        ...body.postData,
      },
    });

    // UPDATING POST DETAIL
    const updatedPostDetail = await prisma.postDetail.upsert({
      where: { postId: id },
      update: {
        ...body.postDetail,
      },
      create: {
        ...body.postDetail,
        postId: id,
      },
    });

    res.status(200).json({ post: updatedPost, postDetail: updatedPostDetail });
    console.log("Post updated successfully!!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    // FINDING THE POST
    const post = await prisma.post.findUnique({
      where: { id },
    });

    // IF POST NOT FOUND
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // CHEKING POST'S USER_ID AND tokenUserId
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    // Delete related PostDetail if it exists
    await prisma.postDetail
      .delete({
        where: { postId: id },
      })
      .catch((err) => {
        if (err.code !== "P2025") {
          throw err;
        }
      });

    // Delete related SavedPost entries
    await prisma.savedPost.deleteMany({
      where: { postId: id },
    });

    // DELETING POST
    await prisma.post.delete({
      where: { id },
    });

    console.log("Post deleted successfully !!");
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
