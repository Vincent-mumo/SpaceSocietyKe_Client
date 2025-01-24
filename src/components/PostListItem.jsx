import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCommentCount = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}/count`);
  return res.data.count; // Assuming the backend returns { count: number }
};

const PostListItem = ({ post }) => {
  // Guard clause to handle undefined/null post
  if (!post) {
    return (
      <div className="flex flex-col gap-2 p-2 border rounded-lg shadow-md w-[450px] my-6 mx-1">
        <p className="text-gray-600">No post data available.</p>
      </div>
    );
  }

  // Fetch comment count for the post
  const { data: commentCount, isLoading, isError } = useQuery({
    queryKey: ["commentCount", post._id],
    queryFn: () => fetchCommentCount(post._id),
  });

  return (
    <div className="flex flex-col gap-2 p-2 border rounded-lg shadow-md w-[450px] my-6 mx-1">
      {/* Post Image */}
      {post?.img && (
        <div className="w-full h-40">
          <Image
            src={post?.img || null} // Use null instead of an empty string
            className="rounded-lg object-cover w-full h-full"
            w="400"
          />
        </div>
      )}

      {/* Post Details */}
      <div className="flex flex-col gap-2">
        <Link to={`/${post?.slug}`} className="text-xl font-semibold hover:text-blue-600">
          {post?.title}
        </Link>
        <div className="flex flex-wrap items-center gap-1 text-gray-600 text-sm">
          <span>Written by</span>
          <Link className="text-blue-600 hover:underline" to={`/posts?author=${post?.user?.username}`}>
            {post?.user?.username}
          </Link>
          <span>on</span>
          <Link className="text-green-600 hover:underline">{post?.category}</Link>
          <span>{format(post?.createdAt)}</span>
        </div>
        <p className="text-gray-700 line-clamp-3">{post?.desc}</p>
        <Link to={`/${post?.slug}`} className="text-green-600 hover:underline text-sm">
          Read More
        </Link>
      </div>

      {/* Comment Count */}
      <div className="mt-2 text-sm text-gray-600">
        {isLoading ? (
          "Loading comments..."
        ) : isError ? (
          "Error loading comments"
        ) : (
          <>
            {commentCount === 0
              ? "No comments yet"
              : `${commentCount} ${commentCount === 1 ? "comment" : "comments"}`}
          </>
        )}
      </div>
    </div>
  );
};

export default PostListItem;