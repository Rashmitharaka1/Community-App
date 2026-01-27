// src/data/posts.js
import rashmiAvatar from "../assets/profile3.jpg"; 
import kasunAvatar from "../assets/profile2.jpg";  
import kasunPost from "../assets/kasun photo.jpg";
import rashmiPost from "../assets/rashmi post.jpg";

export const initialPosts = [
  {
    id: 1,
    user: "Rashmi Tharaka",
    avatar: rashmiAvatar, 
    content:
      "✨ Excited to be part of this community! ✨ Just started exploring this platform and I already love the clean design and positive vibes 💙 Looking forward to sharing ideas, learning new things, and connecting with amazing people here 🚀🤝 Let’s grow together and make this space supportive and fun 🌱😊",
    image: null,
    likes: 51,
    comments: 20,
  },
  {
    id: 2,
    user: "Kasun Perera",
    avatar: kasunAvatar, 
    content:
      "🌟 Small win, big happiness! 🌟 Today I finally achieved something I’ve been quietly working towards for a long time 💪✨ There were late nights, challenges, and lots of learning—but seeing the result makes it all worth it 😊 Grateful for the support and motivation ❤️",
    image: kasunPost,
    likes: 117,
    comments: 45,
  },
  {
  id: 4,
  user: "Rashmi Tharaka",
  avatar: rashmiAvatar,
  content:
    "🌸 Today was such a peaceful day! Took a long walk in the park, enjoyed the fresh air, and listened to my favorite music 🎶🍃 Sometimes small moments like these make everything feel so much better 😊💛 #SelfCare #HappyVibes",
  image: rashmiPost, 
  likes: 81,
  comments: 22,
},
{
  id: 5,
  user: "Nadeesha Silva",
  avatar: "https://i.pravatar.cc/150?img=45", 
  content:
    "🌿 Feeling grateful today! Spent some time gardening and it was so relaxing 🌸🌞 Sometimes connecting with nature is all you need to recharge your mind 💚 #NatureLover #ChillVibes",
  image: null, 
  likes: 41,
  comments: 32,
}

];
