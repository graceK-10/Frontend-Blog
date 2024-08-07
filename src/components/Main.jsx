import { useState, useEffect } from "react";
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
        const response = await axios.get(
          "https://backend-blog-1-n6vo.onrender.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="relative py-20 bg-hero-pattern bg-cover bg-white bg-center overflow-hidden min-h-screen flex flex-col">
      <div className="relative container px-4 mx-auto h-full flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-15 text-center lg:mb-9">
            <h1 className="font-heading text-5xl xs:text-2xl md:text-7xl font-bold">
              <span className="custom-break pr-4 font-serif italic">
                HealthyTable
              </span>
              <span className="custom-break font-serif italic">Talks</span>
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
                    <span className="block text-gray-600 mb-5">
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

          {showContent && (
            <div className="visibility-item flex flex-wrap -mx-4 -mb-12">
              {posts.slice(4).map((post) => (
                <div
                  className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12 border-r border-gray-100"
                  key={post.id}
                >
                  <Link className="block px-4 group" to={`/blog/${post.id}`}>
                    <img
                      className="block w-full h-40 mb-4 object-cover rounded-lg"
                      src={post.imageUrl}
                      alt=""
                    />
                    <span className="block text-gray-500 mb-2">
                      {post.date}
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-orange-900 mb-4">
                      {post.title}
                    </h4>
                    <p className="text-gray-500">
                      {truncateContent(post.content)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <a
              onClick={() => setShowContent(!showContent)}
              className="relative group inline-block py-4 px-7 font-semibold text-orange-900 hover:text-orange-50 rounded-full bg-white transition duration-300 overflow-hidden"
              href="#"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative">See More Articles</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
