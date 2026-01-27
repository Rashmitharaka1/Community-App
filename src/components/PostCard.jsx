import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

export default function PostCard({ post }) {
  const { likePost } = useContext(PostContext);

  return (
    <div className="glass-card mb-4">
      <div className="flex items-center mb-3">
        <img
          src={post.avatar}
          className="w-12 h-12 rounded-full border-2 border-white/30"
        />
        <h3 className="ml-3 font-semibold text-teal-600">{post.user}</h3>
      </div>

      <p className="text-gray-800 mb-3">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          className="rounded-lg mb-3 w-full object-cover max-h-64"
        />
      )}

      <div className="flex gap-6 text-gray-500 text-lg">
        <button
          className="flex items-center gap-1 hover:text-red-400 transition"
          onClick={() => likePost(post.id)}
        >
          <AiFillHeart /> {post.likes}
        </button>

        <div className="flex items-center gap-1">
          <AiOutlineComment /> {post.comments}
        </div>
      </div>
    </div>
  );
}
