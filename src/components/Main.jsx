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

          <div className="flex flex-wrap -mx-4 mb-18">
            {posts.length > 0 && (
              <>
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <Link
                    className="block group w-full"
                    to={`/blog/${posts[0].id}`}
                  >
                    <img
                      className="block w-full mb-5"
                      src={posts[0].imageUrl}
                      alt=""
                    />
                    <span className="block text-gray-500 mb-5">
                      {posts[0].date}
                    </span>
                    <h4 className="text-3xl font-semibold text-gray-900 group-hover:text-orange-900 mb-5">
                      {posts[0].title}
                    </h4>
                    <p className="max-w-xl text-lg text-gray-500">
                      {truncateContent(posts[0].content)}
                    </p>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  {posts.slice(1, 4).map((post) => (
                    <Link
                      className="md:flex group mb-8"
                      to={`/blog/${post.id}`}
                      key={post.id}
                    >
                      <img className="w-48 h-40" src={post.imageUrl} alt="" />
                      <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                        <span className="block text-gray-500 mb-2">
                          {post.date}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-900">
                          {post.title}
                        </h4>
                        <p className="text-gray-500">
                          {truncateContent(post.content)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
