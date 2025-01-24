import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-5 md:px-10 bg-green-500">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="logo.jpg"
          alt="loading"
          w={60} // Default width for desktop
          h={60} // Default height for desktop
          className="rounded-full md:w-[60px] md:h-[60px] w-[35px] h-[35px]" // Responsive width and height
        />
        <span>Space Society Kenya</span>
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
          style={{ zIndex: 1000 }} // Added z-index to ensure it appears above other elements
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Contact Us</Link>
          <SignedOut>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-black text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog">Events</Link>
        <Link to="/blog">Contact Us</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-black text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;