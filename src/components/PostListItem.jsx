import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-lg shadow-md w-full max-w-[300px] my-6 mx-1">
      {/* image */}
      {post?.img && (
        <div className="w-full h-40">
          <Image
            src={post?.img}
            className="rounded-lg object-cover w-full h-full"
            w="400"
          />
        </div>
      )}
      {/* details */}
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
    </div>
  );
};

export default PostListItem;