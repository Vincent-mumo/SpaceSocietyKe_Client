import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState(null);
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const { getToken } = useAuth();

  // Add images or videos to the editor content with fixed dimensions
  useEffect(() => {
    if (img) {
      setValue(
        (prev) =>
          prev +
          `<p><img src="${img.url}" alt="Uploaded Image" style="width: 400px; height: 300px; object-fit: cover;" /></p>`
      );
    }
  }, [img]);

  useEffect(() => {
    if (video) {
      setValue(
        (prev) =>
          prev +
          `<p><iframe class="ql-video" src="${video.url}" style="width: 400px; height: 300px;" allowfullscreen></iframe></p>`
      );
    }
  }, [video]);

  // Mutation for creating a new post
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created successfully!");
      navigate(`/${res.data.slug}`);
    },
    onError: (error) => {
      toast.error("Failed to create the post. Please try again.");
      console.error(error);
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover?.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  // Loading and authentication checks
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You must log in to create a post!</div>;
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 p-5 md:p-10 mt-10">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* Display cover image if it exists */}
        {cover && (
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img
              src={cover.url}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Upload cover image */}
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button
            type="button"
            className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"
          >
            Add a cover image
          </button>
        </Upload>

        {/* Post title */}
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Title"
          name="title"
          required
        />

        {/* Category selection */}
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id="category"
            className="p-2 rounded-xl bg-white shadow-md"
            required
          >
            <option value="General">General</option>
            <option value="Space">Space</option>
            <option value="Rockets">Rockets</option>
            <option value="History">History</option>
            <option value="Astronomy">Astronomy</option>
            <option value="New Discoveries">New Discoveries</option>
          </select>
        </div>

        {/* Short description */}
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
          required
        />

        {/* Editor and media upload buttons */}
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-green-600 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-green-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Posting..." : "Post"}
        </button>

        {/* Progress indicator */}
        <div>{"Progress: " + progress + "%"}</div>
      </form>
    </div>
  );
};

export default Write;