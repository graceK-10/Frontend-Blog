import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Utility function to remove asterisks and format content
const formatContent = (content) => {
  // Remove any asterisks and add spacing
  const formattedContent = content.replace(/\*/g, "");
  return formattedContent;
};

const fetchBlogDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
};

function Detailedblog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const blog = await fetchBlogDetails(id);
      setBlogDetails(blog);
      setComments(blog.comments || []);
    };

    fetchData();
  }, [id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await axios.post(
          `http://localhost:5000/posts/${id}/comments`,
          { text: newComment }
        );
        setComments([...comments, response.data]);
        setNewComment("");
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  if (!blogDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <button
            className="text-gray-500 group inline-flex items-center gap-2 flex-wrap"
            onClick={handleBackClick}
          >
            <div className="group-hover:text-gray-600 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.4167 10H5M5 10L10 5M5 10L10 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="group-hover:text-gray-600 transition duration-200 font-bold">
              Back to Blog
            </span>
          </button>
        </div>
        <img
          className="w-full h-64 lg:h-96 mx-auto rounded-2xl mb-12 object-cover"
          src={blogDetails.imageUrl}
          alt="Blog Post"
        />

        <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
          <span className="text-gray-500">{blogDetails.date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="5"
            viewBox="0 0 4 5"
            fill="none"
          >
            <circle cx="2" cy="2.66669" r="2" fill="#D1D1D1"></circle>
          </svg>
          <span className="text-gray-500">{blogDetails.name}</span>
        </div>
        <h1 className="text-center text-3xl lg:text-5xl font-bold mb-12 max-w-xl lg:max-w-3xl mx-auto">
          {blogDetails.title}
        </h1>
        <div className="px-8 lg:px-24">
          <p className="text-gray-700 font-medium text-lg mb-6">
            {formatContent(blogDetails.content)}
          </p>

          <div className="w-full h-px bg-gray-200 mb-6"></div>
          {/* Comment section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                className="w-full h-24 p-2 border border-gray-300 rounded mb-2"
                placeholder="Add a comment"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
            <div>
              {comments.map((comment, index) => (
                <div key={index} className="mb-2 p-2 border-b border-gray-200">
                  {comment.text}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Detailedblog;
