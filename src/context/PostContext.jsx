import { createContext, useState } from "react";
import { initialPosts } from "../data/posts";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const likePost = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, likePost }}>
      {children}
    </PostContext.Provider>
  );
};
