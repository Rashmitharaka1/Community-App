import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "../components/PostCard";
import rashmiAvatar from "../assets/profile3.jpg"; 

export default function Profile() {
  const { posts } = useContext(PostContext);

   const userPosts = posts.filter((p) => p.user === "Rashmi Tharaka");

  return (
    <div className="pt-24 max-w-xl mx-auto px-4">
      {/* Profile card */}
      <div className="glass-card text-center mb-6">
        <div className="flex justify-center mb-3">
          <img
            src={rashmiAvatar} 
            alt="Rashmi Tharaka"
            className="w-24 h-24 rounded-full object-cover border-2 border-white/30 shadow-lg"
          />
        </div>
        <h2 className="font-bold text-xl text-teal-600">Rashmi Tharaka</h2>
        <p className="text-gray-500">Front-End Intern | React Enthusiast</p>
      </div>

      {/* User posts */}
      {userPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Create one!</p>
      ) : (
        userPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
