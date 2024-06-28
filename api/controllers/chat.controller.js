import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    for (const chat of chats) {
      const receiverId = chat.userIDs.find((id) => id !== tokenUserId);

      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId,
        },
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      });
      chat.receiver = receiver;
    }

    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    await prisma.chat.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

// export const addChat = async (req, res) => {
//   const tokenUserId = req.userId;
//   try {
//     if(tokenUserId == req.body.receiverId){
//       return res.status(400).json({ message: "A user cannot add a chat with themselves!" });
//     }
//     const newChat = await prisma.chat.create({
//       data: {
//         userIDs: [tokenUserId, req.body.receiverId],
//       },
//     });
//     res.status(200).json(newChat);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to add chat!" });
//   }
// };

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const receiverId = req.body.receiverId;
  // console.log(body, tokenUserId);
  try {
    // LOOP ALL CHATS AND CHECK IF A CHAT HAS BOTH THE USERS
    const existingChat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          has: tokenUserId,
        },
        AND: {
          userIDs: {
            has: receiverId,
          },
        },
      },
    });
    // IF YES THEN RETURN CHAT_ID
    if (existingChat) {
      // If a chat exists, return the chat ID
      console.log("Chat already exist !!");
      return res.status(200).json({ chatId: existingChat.id });
    }
    // IF NO THEN CREATE CHAT AND THEN RETURN CHAT ID
    else {
      // If no chat exists, create a new chat
      console.log("Creating a new chat !!");
      const newChat = await prisma.chat.create({
        data: {
          userIDs: [tokenUserId, receiverId],
        },
      });

      // Return the new chat ID
      return res.status(200).json(newChat);
    }
    // res.status(200).json(body);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  
  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          set: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};