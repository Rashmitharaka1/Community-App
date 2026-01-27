import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

export default function Home() {
  const { posts } = useContext(PostContext);

  return (
    <div className="pt-24 max-w-xl mx-auto px-4">
      <CreatePost />

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Create one!</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
