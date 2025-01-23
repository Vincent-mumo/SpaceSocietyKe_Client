import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Blog = () => {
  return (
    <div className="mt-4 flex flex-col gap-8 px-5 md:px-10">
      {/* BREADCRUMB */}
      <div className="flex gap-2 text-sm md:text-base">
        <Link to="/" className="text-gray-600 hover:text-blue-800">
          Home
        </Link>
        <span className="text-gray-400">•</span>
        <span className="text-blue-800 font-medium">Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Titles */}
        <div className="flex-1">
          <h1 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unlock the Universe: Rockets, Galaxies, Science, and Life-Changing Discoveries.
          </h1>
          <p className="mt-6 text-gray-600 text-md md:text-xl">
            Read from great minds and share your ideas with the world too.
          </p>
        </div>

        {/* Animated Button */}
        <Link to="/write" className="relative">
          {/* Mobile Button (Small with Text Path) */}
          <div className="md:hidden w-24 h-24 relative">
            <svg
              viewBox="0 0 200 200"
              width="100"
              height="100"
              className="text-sm tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePathMobile"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePathMobile" startOffset="0%">
                  Read Articles•
                </textPath>
                <textPath href="#circlePathMobile" startOffset="50%">
                  Share your ideas •
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-12 h-12 bg-green-900 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </div>

          {/* Desktop Button (Animated) */}
          <div className="hidden md:block">
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Read Articles•
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Share your ideas •
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-green-900 rounded-full flex items-center justify-center hover:bg-green-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </div>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <div className="h-[300px] md:h-auto">
        <FeaturedPosts />
      </div>

      {/* POST LIST */}
      <div className="mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Recent Posts
        </h1>
        <PostList />
      </div>
    </div>
  );
};

export default Blog;