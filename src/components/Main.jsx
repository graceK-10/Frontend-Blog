import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Utility function to trucate content to two sentences
const truncateContent = (content) => {
  const sentences = content.split(". ");
  if (sentences.length <= 2) {
    return content;
  }
  return sentences.slice(0, 2).join(". ") + ".";
};

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fetch posts from the backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="relative py-20 bg-orange-50 overflow-hidden min-h-screen flex flex-col">
      <div className="relative container px-4 mx-auto h-full flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-15 text-center lg:mb-9">
            <h1 className="font-heading text-5xl xs:text-2xl md:text-7xl font-bold">
              <span className="custom-break pr-4 font-serif italic">
                Cooking
              </span>
              <span className="custom-break font-serif italic">Chronicles</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
