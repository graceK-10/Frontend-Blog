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

  return <section></section>;
};

export default Main;
