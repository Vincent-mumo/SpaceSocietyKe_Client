import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-green-900 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=Rockets"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Rockets
        </Link>
        <Link
          to="/posts?cat=Astronomy"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Astronomy
        </Link>
        <Link
          to="/posts?cat=New Discoveries"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          New Discoveries
        </Link>
        <Link
          to="/posts?cat=Space Probes"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Space Probes
        </Link>
        <Link
          to="/posts?cat=History"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          History
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search/>
    </div>
  );
};

export default MainCategories;
