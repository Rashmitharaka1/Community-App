import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

export default function CreatePost() {
  const { addPost } = useContext(PostContext);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    addPost({
      id: Date.now(),
      user: "Rashmi Tharaka",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: text,
      image: null,
      likes: 0,
      comments: 0,
    });

    setText("");
  };

  return (
    <div className="glass-card mb-6">
      <textarea
        className="w-full bg-white/20 text-gray-800 border border-green/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-3 bg-teal-600/80 hover:bg-teal-500/80 text-white font-semibold px-5 py-2 rounded-lg transition transform hover:scale-105"
      >
        Post
      </button>
    </div>
  );
}
